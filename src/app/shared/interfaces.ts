export interface User {
  email: string;
  password: string;
  role: string;
}

export enum ListType {
  ToDo = 'todo',
  InProcess = 'process',
  Done = 'done',
}

export interface TodoItem {
  title: string;
  isCompleted: boolean;
  list: ListType;
}
