import { styles } from "./layout";

const endpoints = [
  "/api/portfolio",
  "/api/profile",
  "/api/projects",
  "/api/skills",
  "/api/education",
  "/api/activities",
  "/api/contact",
];

export default function Home() {
  return (
    <main style={styles.card}>
      <h1 style={styles.heading}>TurjoFolio API</h1>
      <p style={styles.sub}>
        Next.js route handlers backed by MongoDB. The React app in <strong>User/</strong>{" "}
        consumes these endpoints. Run <code>npm run seed</code> once to populate the database.
      </p>
      {endpoints.map((endpoint) => (
        <code key={endpoint} style={styles.code}>
          GET {endpoint}
        </code>
      ))}
      <code style={styles.code}>POST /api/contact</code>
    </main>
  );
}
