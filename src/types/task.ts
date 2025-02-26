export type statusType = { key: string; value: string };

export const statusList: statusType[] = [
  { key: "todo", value: "To do" },
  { key: "in-progress", value: "In progress" },
  { key: "done", value: "Done" },
];

export interface Task {
  id: number;
  title: string;
  description: string;
  status: statusType;
}
