import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      HomePage
      <div>
        <Link href="/properties">Properties Page</Link>
      </div>
    </div>
  );
};

export default HomePage;
