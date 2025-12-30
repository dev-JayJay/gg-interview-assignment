import { Project, Task, Subtask, Status } from "../types";
import { deriveStatus } from "../utils/statusUtils";


export type Action =
  | {
      type: "UPDATE_SUBTASK_STATUS";
      projectId: string;
      taskId: string;
      subtaskId: string;
      status: Status;
    }
  | {
      type: "ADD_TASK";
      projectId: string;
    }
  | {
      type: "ADD_SUBTASK";
      projectId: string;
      taskId: string;
    }
  | {
      type: "DELETE_TASK";
      projectId: string;
      taskId: string;
    }
  | {
      type: "DELETE_SUBTASK";
      projectId: string;
      taskId: string;
      subtaskId: string;
    };

    export function projectsReducer(state: Project[],action: Action): Project[] {
        switch (action.type) {
            case "UPDATE_SUBTASK_STATUS":
            return updateSubtaskStatus(state, action);

            case "ADD_TASK":
            return addTask(state, action);

            case "ADD_SUBTASK":
            return addSubtask(state, action);

            case "DELETE_TASK":
            return deleteTask(state, action);

            case "DELETE_SUBTASK":
            return deleteSubtask(state, action);

            default:
            return state;
        }
    }


    function updateSubtaskStatus(state: Project[],action: Extract<Action, { type: "UPDATE_SUBTASK_STATUS" }>): Project[] {
        return state.map(project => {
            if (project.id !== action.projectId) {
            return project;
            }

            const updatedTasks = project.tasks.map(task => {
            if (task.id !== action.taskId) {
                return task;
            }

            const updatedSubtasks = task.subtasks.map(subtask =>
                subtask.id === action.subtaskId
                ? { ...subtask, status: action.status }
                : subtask
            );

            return {
                ...task,
                subtasks: updatedSubtasks,
                status: deriveStatus(updatedSubtasks),
            };
            });

            return {
            ...project,
            tasks: updatedTasks,
            status: deriveStatus(updatedTasks),
            };
        });
    }

    function addTask(state: Project[], action: Extract<Action, { type: "ADD_TASK" }>): Project[] {
        return state.map(project =>
            project.id === action.projectId
            ? {
                ...project,
                tasks: [
                    ...project.tasks,
                    {
                    id: crypto.randomUUID(),
                    title: "New Task",
                    status: "todo",
                    subtasks: [],
                    },
                ],
                status: deriveStatus(project.tasks),
                }
            : project
        );
    }

    function addSubtask( state: Project[],action: Extract<Action, { type: "ADD_SUBTASK" }>): Project[] {
        return state.map(project => {
            if (project.id !== action.projectId) return project;

            const updatedTasks = project.tasks.map(task =>
            task.id === action.taskId
                ? {
                    ...task,
                    subtasks: [
                    ...task.subtasks,
                    {
                        id: crypto.randomUUID(),
                        title: "New Subtask",
                        status: "todo" as Status,
                    },
                    ],
                    status: deriveStatus(task.subtasks),
                }
                : task
            );

            return {
            ...project,
            tasks: updatedTasks,
            status: deriveStatus(updatedTasks),
            };
        });
    }

    function deleteTask( state: Project[], action: Extract<Action, { type: "DELETE_TASK" }>): Project[] {
        return state.map(project => {
            if (project.id !== action.projectId) return project;

            const updatedTasks = project.tasks.filter(
            task => task.id !== action.taskId
            );

            return {
            ...project,
            tasks: updatedTasks,
            status: deriveStatus(updatedTasks),
            };
        });
    }


    function deleteSubtask( state: Project[], action: Extract<Action, { type: "DELETE_SUBTASK" }>): Project[] {
        return state.map(project => {
            if (project.id !== action.projectId) return project;

            const updatedTasks = project.tasks.map(task => {
            if (task.id !== action.taskId) return task;

            const updatedSubtasks = task.subtasks.filter(
                subtask => subtask.id !== action.subtaskId
            );

            return {
                ...task,
                subtasks: updatedSubtasks,
                status: deriveStatus(updatedSubtasks),
            };
            });

            return {
            ...project,
            tasks: updatedTasks,
            status: deriveStatus(updatedTasks),
            };
        });
    }
