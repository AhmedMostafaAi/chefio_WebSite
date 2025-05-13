export const metadata = {
  title: "Chefio | Login",
};

import React from "react";
import AuthForm from "@/components/AuthForm";

const LoginPage: React.FC = () => {
  return <AuthForm type="login" />;
};

export default LoginPage;
