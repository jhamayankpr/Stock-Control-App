"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post("/api/login", { email, password });
      localStorage.setItem("token", res.data.token);
      router.push("/dashboard");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(125deg,#232526 10%,#3A5348 30%,#4f8bea 60%,#7ed6df 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: `'Inter',system-ui,sans-serif`,
        overflow: "hidden",
        position: "relative"
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

        .login-blur-bg {
          position: fixed;
          top: -80px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle at 50% 40%, #91f6d9aa 0%, #1c345e00 100%);
          filter: blur(35px);
          z-index: 1;
        }
        .login-blur-bg2 {
          position: fixed;
          left: -120px;
          bottom: -120px;
          width: 500px;
          height: 510px;
          background: radial-gradient(circle at 60% 54%, #8aa6ff88 0%, #1c345e00 100%);
          filter: blur(40px);
          z-index: 1;
        }
        .modern-card {
          animation: cardAppear 0.7s cubic-bezier(.77,.2,.32,1.08);
          transition: box-shadow 0.23s, transform 0.23s !important;
          background: rgba(255,255,255,0.78);
          backdrop-filter: blur(18px) saturate(160%);
          box-shadow: 0 2px 40px 0 rgba(25,30,70,0.14),0 1.5px 10px 0 rgba(140,200,255,0.09);
        }
        .modern-card:focus-within {
          box-shadow: 0 10px 32px 2px rgba(41,128,185,0.18), 0 2px 14px rgba(33,170,243,0.14) !important;
          transform: scale(1.021);
        }
        @keyframes cardAppear {
          from { opacity: 0; transform: translateY(44px) scale(0.97);}
          to   { opacity: 1; transform: none;}
        }
        .modern-input {
          transition: border .25s, box-shadow .19s !important;
          font-size: 1rem;
        }
        .modern-input:focus {
          border-color: #627cf7;
          box-shadow: 0 0 0 2.5px #4f8bea40;
          background: #f2f7fc;
        }
        .modern-btn {
          transition: background .18s, box-shadow .2s, transform .18s;
          box-shadow: 0 2px 14px 0 #4f8bea45;
        }
        .modern-btn:hover, .modern-btn:focus {
          background: linear-gradient(90deg,#627cf7 30%,#8edfd3 100%) !important;
          box-shadow: 0 8px 32px 0 #7fbeea42;
          transform: translateY(-2px) scale(1.022);
          filter: brightness(1.09) drop-shadow(0 0 9px #627cf77b);
        }
        .error-glass {
          background: rgba(240,72,93,0.14);
          border: 1.7px solid #ffccd0;
        }
        @media (max-width: 600px) {
          .modern-card { min-width: 90vw !important; padding: 22px 5vw !important; }
        }
      `}</style>
      <div className="login-blur-bg"></div>
      <div className="login-blur-bg2"></div>
      <div
        className="modern-card"
        style={{
          padding: "40px 46px",
          borderRadius: "22px",
          minWidth: "340px",
          maxWidth: "390px",
          width: "100%",
          zIndex: 2,
        }}
        tabIndex={-1}
      >
        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "25px" }}
        >
          <h2
            style={{
              marginBottom: "10px",
              textAlign: "center",
              fontWeight: 800,
              fontSize: "2.1rem",
              letterSpacing: ".01em",
              background:
                "linear-gradient(90deg, #3b4ad6 40%, #1fc8db 90%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              filter:
                "drop-shadow(0 1px 4px #a1c4fd44) drop-shadow(0 0 3px #f9fafc)"
            }}
          >
            Sign In
          </h2>
          <div>
            <label
              htmlFor="email"
              style={{
                fontWeight: 500,
                marginBottom: "8px",
                display: "block",
                letterSpacing: ".01em",
                color: "#26314d"
              }}
            >
              Email
            </label>
            <input
              type="email"
              autoComplete="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="modern-input"
              style={{
                padding: "13px",
                borderRadius: "8px",
                border: "1.6px solid #e0e7ef",
                width: "100%",
                outline: "none",
                background: "#f4faff",
                boxSizing: "border-box",
                fontSize: "1.01rem"
              }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              style={{
                fontWeight: 500,
                marginBottom: "8px",
                display: "block",
                letterSpacing: ".01em",
                color: "#26314d"
              }}
            >
              Password
            </label>
            <input
              type="password"
              autoComplete="current-password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="modern-input"
              style={{
                padding: "13px",
                borderRadius: "8px",
                border: "1.6px solid #e0e7ef",
                width: "100%",
                outline: "none",
                background: "#f4faff",
                boxSizing: "border-box",
                fontSize: "1.01rem"
              }}
            />
          </div>
          <button
            type="submit"
            className="modern-btn"
            style={{
              background: "linear-gradient(92deg,#627cf7 60%,#4f8bea 100%)",
              color: "white",
              fontWeight: 700,
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "1.05rem",
              letterSpacing: ".02em",
              marginTop: "3px"
            }}
            tabIndex={0}
          >
            Sign In
          </button>
          {error && (
            <div
              className="error-glass"
              style={{
                color: "#b91a1a",
                textAlign: "center",
                marginTop: "2px",
                padding: "10px 0 9px",
                borderRadius: "8px",
                fontWeight: 600,
                animation: "cardAppear 0.18s",
                fontSize: "1.04rem"
              }}
            >
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
