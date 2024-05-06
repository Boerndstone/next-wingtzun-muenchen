"use client";
import { useEffect } from "react";

export default function InstallBootstrap() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min");
    }
  }, []);

  return <></>;
}
