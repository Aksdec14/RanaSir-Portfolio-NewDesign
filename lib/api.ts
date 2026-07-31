import type { SectionContent } from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function fetchContent(): Promise<SectionContent> {
  const res = await fetch(`${API_BASE}/api/content`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch content");
  return res.json();
}
