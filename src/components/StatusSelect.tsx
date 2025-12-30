import { Status } from "../types";

interface Props {
  value: Status;
  onChange: (status: Status) => void;
}

export function StatusSelect({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value as Status)}
    >
      <option value="todo">Todo</option>
      <option value="in-progress">In Progress</option>
      <option value="done">Done</option>
    </select>
  );
}
