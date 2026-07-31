import type { SectionContent } from "./types";

const API_BASE = "https://content-admin-6ezj.onrender.com";

export async function fetchContent(): Promise<SectionContent> {
  const res = await fetch(`${API_BASE}/api/content`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch content");
  return res.json();
}
