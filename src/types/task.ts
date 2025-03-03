export interface AssigneeData {
  initials: string;
  color: 'blue' | 'orange' | 'pink' | 'green';
  name?: string;
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

export const TEAM_MEMBERS: AssigneeData[] = [
  { name: 'Koya', initials: 'KO', color: 'blue' },
  { name: 'Daz', initials: 'DA', color: 'orange' },
  { name: 'Jane', initials: 'JA', color: 'pink' },
  { name: 'Julia', initials: 'JU', color: 'green' }
];