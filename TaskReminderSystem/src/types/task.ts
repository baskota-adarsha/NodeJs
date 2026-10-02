export interface Task {
  id: Number;
  title: string;
  remindAt: string;
  done: false;
}

export type ApiResponse<T> = {
  success: boolean;
  data: T;
};
