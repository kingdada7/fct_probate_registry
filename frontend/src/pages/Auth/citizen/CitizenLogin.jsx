import React, { useEffect, useState } from "react";
import { Mail, Key, LockKeyhole, ShieldCheck, LogIn } from "lucide-react";
import { InfinitySpin } from "react-loader-spinner";
function CitizenLogin() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timmer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timmer);
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F7F6]">
        <InfinitySpin width="200" color="#0b602a" />
      </div>
    );
  }
  return <div></div>;
}

export default CitizenLogin;
