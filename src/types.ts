export type Status = "todo" | "in-progress" | "done";

export interface Subtask {
  id: string;
  title: string;
  status: Status;
}

export interface Task {
  id: string;
  title: string;
  status: Status;       
  subtasks: Subtask[];
}

export interface Project {
  id: string;
  title: string;
  status: Status;        
  tasks: Task[];
}
