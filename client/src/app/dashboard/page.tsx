// src/app/dashboard/page.tsx
"use client";
import { Provider } from "react-redux";
import { store } from "../store";      // <-- use the correct relative path!
import CardPopularProducts from "./CardPopularProducts";

export default function DashboardPage() {
  return (
    <Provider store={store}>
      <CardPopularProducts />
    </Provider>
  );
}
