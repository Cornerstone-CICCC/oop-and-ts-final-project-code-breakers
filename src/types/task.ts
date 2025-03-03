export interface AssigneeData {
  initials: string;
  color: 'blue' | 'orange' | 'pink' | 'green';
}

export interface TaskData {
  category: string;
  title: string;
  description: string;
  assignees: AssigneeData[];
}

export interface ColumnData {
  title: string;
  tasks: TaskData[];
}