"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { fetchContent } from "./api";
import type { SectionContent } from "./types";

interface ContentState {
  content: SectionContent | null;
  loading: boolean;
}

const ContentContext = createContext<ContentState | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SectionContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent()
      .then(setContent)
      .catch((err: Error) => console.error("Failed to load content:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent(): ContentState {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
}
