import { useState } from "react";
import { Task } from "../types";
import { Action } from "../state/projectsReducer";
import { SubtaskItem } from "./SubtaskItem";

interface Props {
  task: Task;
  projectId: string;
  dispatch: React.Dispatch<Action>;
}

export function TaskItem({ task, projectId, dispatch }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
      <div className="border rounded p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">{task.title}</div>
          <div className="text-sm text-gray-600">
            Status: {task.status}
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
              dispatch({
                type: "ADD_SUBTASK",
                projectId,
                taskId: task.id,
              })
            }
            className="text-sm px-2 py-1 border rounded"
          >
            Add Subtask
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "DELETE_TASK",
                projectId,
                taskId: task.id,
              })
            }
            className="text-sm px-2 py-1 border rounded"
          >
            Delete
          </button>
        </div>
      </div>

      {expanded && (
        <div className="pl-4 space-y-2 border-l">
          {task.subtasks.map(subtask => (
            <SubtaskItem
              key={subtask.id}
              subtask={subtask}
              projectId={projectId}
              taskId={task.id}
              dispatch={dispatch}
            />
          ))}
        </div>
      )}
    </div>
  );
}
