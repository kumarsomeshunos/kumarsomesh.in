"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function ThemePage() {
  const { slug: themeName } = useParams();

  useEffect(() => {
    if (themeName) {
      document.cookie = `themeName=${themeName}; path=/; samesite=strict`;
      window.location.href = "/";
    }
  }, [themeName]);

  return <div>Changing theme...</div>;
}