// server/src/controllers/userController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: "Error retrieving users" });
  }
};

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Use findFirst here
    let user = await prisma.users.findFirst({ where: { email } });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await prisma.users.create({
      data: {
        userId: email,
        name: req.body.name || email,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Use findFirst here
    const user = await prisma.users.findFirst({ where: { email } });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password as string);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = { user: { id: user.userId } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET as string,
      { expiresIn: '1h' },
      (err: any, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};