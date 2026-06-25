"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/ui/basics/LoadingScreen";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setLoading(false);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}