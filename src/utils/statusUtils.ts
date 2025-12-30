import { Status } from "../types";

export function deriveStatus(children: { status: Status }[]): Status {
  if (children.length === 0) return "todo";

  const allDone = children.every(c => c.status === "done");
  if (allDone) return "done";

  const allTodo = children.every(c => c.status === "todo");
  if (allTodo) return "todo";

  return "in-progress";
}
