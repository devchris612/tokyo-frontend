import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

type Props = {};

function ForgotPasswordPage({}: Props) {
  return (
    <div className="max-w-lg mx-auto pt-20 container mx-auto">
      <h1 className="text-xl mb-10 font-semibold">
        Vui lòng điền email để cập nhật lại mật khẩu. Chúng tôi sẽ gửi một email
        kèm mật khẩu mới cho bạn.
      </h1>
      <ForgotPasswordForm />
    </div>
  );
}

export default ForgotPasswordPage;
