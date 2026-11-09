import { useCallback, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ErrorScreen from "./components/ErrorScreen";
import { fetchPortfolio } from "./lib/api";
import type { Portfolio } from "./lib/types";

type State =
  | { status: "loading" }
  | { status: "ready"; data: Portfolio }
  | { status: "error"; message: string };

export default function App() {
  const [state, setState] = useState<State>({ status: "loading" });

  const load = useCallback(async () => {
    setState({ status: "loading" });
    try {
      const data = await fetchPortfolio();
      if (!data.profile) {
        throw new Error("The database has no profile yet. Run `npm run seed` in the Server folder.");
      }
      setState({ status: "ready", data });
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "An unknown error occurred while loading the portfolio.",
      });
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  if (state.status === "loading") return <LoadingScreen />;
  if (state.status === "error") return <ErrorScreen message={state.message} onRetry={load} />;

  const { profile, projects, skills, education, activities } = state.data;

  return (
    <>
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Education education={education} activities={activities} />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </>
  );
}
