export type Status = { key: string; value: string };

export const statusList: Status[] = [
  { key: 'todo', value: 'To do' },
  { key: 'in-progress', value: 'In progress' },
  { key: 'done', value: 'Done' },
];

export interface Task {
  id: number;
  title: string;
  description: string;
  status: Status;
}

export class TaskList {
  private tasks: Task[] = [];
  private nextId: number = 1;

  // Adds a new task, auto-generating an ID
  add(newTask: Omit<Task, 'id'>): Task {
    const task: Task = { ...newTask, id: this.nextId++ };
    this.tasks.push(task);
    return task;
  }

  // Updates a task by ID with the provided fields
  update(id: number, updatedFields: Partial<Omit<Task, 'id'>>): Task | undefined {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      Object.assign(task, updatedFields);
    }
    return task;
  }

  // Deletes a task by its ID, returns true if a task was removed
  delete(id: number): boolean {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter((t) => t.id !== id);
    return this.tasks.length < initialLength;
  }

  // Returns all tasks
  getTasks(): Task[] {
    return this.tasks;
  }

  // Retrieves a task by its ID
  getTaskById(id: number): Task | undefined {
    return this.tasks.find((t) => t.id === id);
  }

  // Retrieves all tasks by the specified status
  getTasksByStatus(status: Status): Task[] {
    return this.tasks.filter((task) => task.status.key === status.key);
  }
}

// Example usage
// const taskList = new TaskList();
// const task1 = taskList.add({
//   title: 'Finish project',
//   description: 'Complete the final assignment for the course',
//   status: statusList[0],
// });

// console.log('Added Task:', task1);

// const updatedTask = taskList.update(task1.id, { status: statusList[2] });
// console.log('Updated Task:', updatedTask);

// const isDeleted = taskList.delete(task1.id);
// console.log('Task Deleted:', isDeleted);

// const todoTasks = taskList.getTasksByStatus(statusList[0]);
// console.log('Tasks with status "To do":', todoTasks);
