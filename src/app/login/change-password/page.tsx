import ChangePasswordForm from "@/components/forms/ChangePasswordForm";
import React from "react";

type Props = {};

function ChangePasswordPage({}: Props) {
  return (
    <div className="max-w-lg mx-auto pt-20 container mx-auto">
      <h1 className="text-xl mb-10 font-semibold">
        Vui lòng điền email để cập nhật lại mật khẩu. Chúng tôi sẽ gửi một email
        kèm mật khẩu mới cho bạn.
      </h1>
      <ChangePasswordForm />
    </div>
  );
}

export default ChangePasswordPage;
