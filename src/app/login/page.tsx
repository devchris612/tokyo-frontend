import LoginForm from "@/components/forms/LoginForm";
import React from "react";

type Props = {};

function LoginPage({}: Props) {
  return (
    <div className="py-20 container mx-auto">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
