"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { loginAction } from "@/app/actions/loginAction";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {};

function LoginForm({}: Props) {
  const [errors, action] = useFormState(loginAction, {});
  const searchParams = useSearchParams();
  const resetStatus = searchParams.get("reset");

  return (
    <form
      action={action}
      className="max-w-lg mx-auto flex flex-col gap-4">
      {resetStatus === "success" ? (
        <p className="text-green-600">
          Bạn đã đổi mật khẩu thành công! Vui lòng đăng nhập với mật khẩu mới
        </p>
      ) : null}
      <h1 className="text-xl font-bold">Đăng nhập</h1>

      <div>
        <Label>Email</Label>
        <Input
          type="text"
          placeholder="Nhập email"
          id="email"
          name="email"
        />
        {errors?.email && (
          <p className="text-destructive text-sm">{errors.email}</p>
        )}
      </div>

      <div>
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Nhập password"
          id="password"
          name="password"
        />
        {errors?.password && (
          <p className="text-destructive text-sm">{errors.password}</p>
        )}
      </div>

      {errors?.authError && (
        <p className="text-destructive text-sm">{errors.authError.message}</p>
      )}
      <Link
        href="/login/forgot-password"
        className="hover:underline text-sm text-blue-500">
        Quên mật khẩu?
      </Link>
      <Link
        href="/login/change-password"
        className="hover:underline text-sm text-blue-500">
        Đổi mật khẩu
      </Link>
      <Button>Đăng nhập</Button>
    </form>
  );
}

export default LoginForm;
