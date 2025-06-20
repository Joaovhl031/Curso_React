import { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  task: TaskModel[];
  secondsRemaining: number;
  formattedSecondsRemaining: string;
  activeRask: TaskModel | null;
  currentCycle: number | null;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime:number;
  };
};
