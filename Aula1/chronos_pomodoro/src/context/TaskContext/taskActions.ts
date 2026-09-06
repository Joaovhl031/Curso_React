import { TaskModel } from '../../models/TaskModel';

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  STOP_TASK = 'STOP_TASK',
  RESET_TASK = 'RESET_TASK',
}

export type TaskActionWithPayload = {
  type: TaskActionsTypes.START_TASK;
  payload: TaskModel;
};

export type TaskActionWithoutPayload =
  | {
      type: TaskActionsTypes.STOP_TASK;
    }
  | {
      type: TaskActionsTypes.RESET_TASK;
    };

export type TaskActionModel = TaskActionWithPayload | TaskActionWithoutPayload;