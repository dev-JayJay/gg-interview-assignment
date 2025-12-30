import { useState } from "react";
import { Project } from "../types";
import { Action } from "../state/projectsReducer";
import { TaskItem } from "./TaskItem";

interface Props {
  project: Project;
  dispatch: React.Dispatch<Action>;
}

export function ProjectItem({ project, dispatch }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
      <div className="border rounded p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{project.title}</div>
          <div className="text-sm text-gray-600">
            Status: {project.status}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setExpanded(v => !v)}
            className="text-sm px-2 py-1 border rounded"
          >
            {expanded ? "Collapse" : "Expand"}
          </button>

          <button
            onClick={() =>
              dispatch({ type: "ADD_TASK", projectId: project.id })
            }
            className="text-sm px-2 py-1 border rounded"
          >
            Add Task
          </button>
        </div>
      </div>

      {expanded && (
        <div className="pl-4 space-y-2 border-l">
          {project.tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              projectId={project.id}
              dispatch={dispatch}
            />
          ))}
        </div>
      )}
    </div>
  );
}
