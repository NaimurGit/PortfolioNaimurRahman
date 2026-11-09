import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "TurjoFolio API",
  description: "Next.js + MongoDB backend powering the TurjoFolio portfolio.",
};

const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: 0,
    minHeight: "100vh",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    background: "#0b1120",
    color: "#e2e8f0",
    display: "grid",
    placeItems: "center",
    padding: "2rem",
  },
  card: {
    maxWidth: "560px",
    width: "100%",
    background: "#111a2e",
    border: "1px solid #1e293b",
    borderRadius: "16px",
    padding: "2rem",
  },
  heading: { margin: "0 0 0.5rem", fontSize: "1.5rem" },
  sub: { margin: "0 0 1.5rem", color: "#94a3b8", lineHeight: 1.6 },
  code: {
    display: "block",
    padding: "0.65rem 0.85rem",
    background: "#0b1120",
    borderRadius: "8px",
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
    fontSize: "0.85rem",
    color: "#7dd3fc",
    marginBottom: "0.5rem",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={styles.body}>{children}</body>
    </html>
  );
}

export { styles };
