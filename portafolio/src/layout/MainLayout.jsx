import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>{children}</div>
      <Footer />
    </div>
  );
}
