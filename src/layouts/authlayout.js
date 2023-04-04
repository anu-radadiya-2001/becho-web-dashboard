import React, { useEffect } from "react";
const AuthLayout = ({ children ,className }) => {
  return (
    <main>
      <main className={`auth-bg min-h-screen h-full pt- pb-6 p-4 md:p-0 relative md:flex justify-center ${className}`}>
        {children}
      </main>
    </main>
  );
};

export default AuthLayout;
