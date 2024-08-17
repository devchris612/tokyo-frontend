"use client";

import React from "react";
import { Button } from "../ui/button";
import clearHistoryAction from "@/app/actions/clearHistoryAction";

type Props = {
  userId: string;
};

function HistoryClearButton({ userId }: Props) {
  return (
    <Button
      type="submit"
      className="bg-destructive"
      onClick={(e) => clearHistoryAction(userId)}>
      Clear history
    </Button>
  );
}

export default HistoryClearButton;
