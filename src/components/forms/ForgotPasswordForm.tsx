"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { forgotPasswordAction } from "@/app/actions/forgotPasswordAction";

type Props = {};

function ForgotPasswordForm({}: Props) {
  const [error, action] = useFormState(forgotPasswordAction, {});
  const { pending } = useFormStatus();

  return (
    <form action={action}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Email của bạn"
          type="email"
          required
          name="email"
          id="email"
        />
        {error?.email && <p className="text-destructive">{error.email}</p>}
      </div>
      {error?.all && <p className="text-destructive">{error.all}</p>}
      <Button
        disabled={pending}
        className={`mt-4 ${pending ? "opacity-50" : ""}`}
        type="submit">
        Gửi email
      </Button>
    </form>
  );
}

export default ForgotPasswordForm;
