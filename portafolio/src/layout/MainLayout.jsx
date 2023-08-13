import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MemoizedHeader = React.memo(Navbar);
const MemoizedFooter = React.memo(Footer);

export default function MainLayout({ children }) {
  return (
    <div>
      <MemoizedHeader />
      <div style={{ marginTop: "80px" }}>{children}</div>
      <MemoizedFooter />
    </div>
  );
}
