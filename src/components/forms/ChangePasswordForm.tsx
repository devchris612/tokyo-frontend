"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { changePasswordAction } from "@/app/actions/changePasswordAction";

type Props = {};

function ChangePasswordForm({}: Props) {
  const [error, action] = useFormState(changePasswordAction, {});
  const { pending } = useFormStatus();

  return (
    <form
      action={action}
      className="flex flex-col gap-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Nhập email"
          type="email"
          name="email"
          id="email"
        />
        {error?.email && (
          <p className="text-destructive text-sm">{error.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="old_pw">Mật khẩu cũ</Label>
        <Input
          placeholder="Nhập mật khẩu cũ"
          type="password"
          name="old_pw"
          id="old_pw"
        />
        {error?.old_pw && (
          <p className="text-destructive text-sm">{error.old_pw}</p>
        )}
      </div>
      <div>
        <Label htmlFor="old_pw">Mật khẩu mới</Label>
        <Input
          placeholder="Nhập mật khẩu mới"
          type="password"
          name="new_pw"
          id="new_pw"
        />
        {error?.new_pw && (
          <p className="text-destructive text-sm">{error.new_pw}</p>
        )}
      </div>
      <div>
        <Label htmlFor="cf_new_pw">Nhập lại khẩu mới</Label>
        <Input
          placeholder="Nhập lại mật khẩu mới"
          type="password"
          name="cf_new_pw"
          id="cf_new_pw"
        />
        {error?.cf_new_pw && (
          <p className="text-destructive text-sm">{error.cf_new_pw}</p>
        )}
      </div>
      {error?.all && <p className="text-destructive">{error.all}</p>}
      <Button
        disabled={pending}
        className={`mt-4 ${pending ? "opacity-50" : ""}`}
        type="submit">
        Đổi mật khẩu
      </Button>
    </form>
  );
}

export default ChangePasswordForm;
