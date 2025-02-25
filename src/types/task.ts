type status = { key: string; value: string };

const statusList: status[] = [
  { key: "todo", value: "To do" },
  { key: "in-progress", value: "In progress" },
  { key: "done", value: "Done" },
];

export interface Task {
  id: number;
  title: string;
  description: string;
  status: status;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: status;
}
