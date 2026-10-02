interface Task2 {
  id: number;
  title: string;
  remindAt?: Date; // optional
  done: boolean;
}

type Status = "pending" | "done" | "overdue";

function first<T>(items: T[]): T | undefined {
  return items[0];
}
const t = first<Task2>([{ id: 1, title: "A", done: false }]);
console.log(t);

type ApiResponse<T> = {
  success: boolean;
  data: T;
};

interface Task3 {
  id: number;
  title: string;
  remindAt?: Date;
  done: boolean;
}

const response: ApiResponse<Task3[]> = {
  success: true,
  data: [
    {
      id: 1,
      title: "Do homework",
      remindAt: new Date("2027-05-03"),
      done: false,
    },
  ],
};
