import { Subtask, Status } from "../types";
import { Action } from "../state/projectsReducer";
import { StatusSelect } from "./StatusSelect";

interface Props {
  subtask: Subtask;
  projectId: string;
  taskId: string;
  dispatch: React.Dispatch<Action>;
}

export function SubtaskItem({
  subtask,
  projectId,
  taskId,
  dispatch,
}: Props) {
  const handleStatusChange = (status: Status) => {
    dispatch({
      type: "UPDATE_SUBTASK_STATUS",
      projectId,
      taskId,
      subtaskId: subtask.id,
      status,
    });
  };

  return (
    <div className="flex items-center justify-between text-sm">
      <span>{subtask.title}</span>

      <div className="flex items-center gap-2">
        <StatusSelect
          value={subtask.status}
          onChange={handleStatusChange}
        />

        <button
          onClick={() =>
            dispatch({
              type: "DELETE_SUBTASK",
              projectId,
              taskId,
              subtaskId: subtask.id,
            })
          }
          className="px-2 py-1 border rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
