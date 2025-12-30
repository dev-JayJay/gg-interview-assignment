"use client";

import { useReducer } from "react";
import { projectsReducer } from "../src/state/projectsReducer";
import { initialProjects } from "../src/data/mockData";
import { ProjectList } from "../src/components/ProjectList";

export default function Page() {
  const [projects, dispatch] = useReducer(
    projectsReducer,
    initialProjects
  );

  return (
   <main className="max-w-3xl mx-auto py-6">
    <h1 className="text-2xl font-semibold mb-6">
      Admin Dashboard
    </h1>

    <ProjectList projects={projects} dispatch={dispatch} />
  </main>
  );
}
