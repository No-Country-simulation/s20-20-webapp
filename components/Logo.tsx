import Link from "next/link";
import React from "react";

import "../style/logo.css";

export default function Logo() {
  return (
    <Link href="/" className="logo">
      Novapay
    </Link>
  );
}
