import { Project } from "../types";

export const initialProjects: Project[] = [
  {
    id: "project-1",
    title: "Website Redesign",
    status: "in-progress", 
    tasks: [
      {
        id: "task-1",
        title: "Landing Page",
        status: "in-progress",
        subtasks: [
          {
            id: "subtask-1",
            title: "Hero Section",
            status: "done",
          },
          {
            id: "subtask-2",
            title: "Call to Action",
            status: "in-progress",
          },
        ],
      },
      {
        id: "task-2",
        title: "About Page",
        status: "todo", 
        subtasks: [
          {
            id: "subtask-3",
            title: "Company History",
            status: "todo",
          },
        ],
      },
    ],
  },
  {
    id: "project-2",
    title: "Mobile App",
    status: "done", 
    tasks: [
      {
        id: "task-3",
        title: "Authentication",
        status: "done",
        subtasks: [
          {
            id: "subtask-4",
            title: "Login Screen",
            status: "done",
          },
          {
            id: "subtask-5",
            title: "Signup Screen",
            status: "done",
          },
        ],
      },
    ],
  },
];
