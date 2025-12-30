import { Project } from "../types";
import { Action } from "../state/projectsReducer";
import { ProjectItem } from "./ProjectItem";

interface Props {
  projects: Project[];
  dispatch: React.Dispatch<Action>;
}

export function ProjectList({ projects, dispatch }: Props) {
  return (
    <div className="space-y-4 p-4">
      {projects.map(project => (
        <ProjectItem
          key={project.id}
          project={project}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}
