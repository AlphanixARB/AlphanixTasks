import Model from '@nozbe/watermelondb/Model';

export interface ITask extends Model {
  id: string;
  taskID?: number;
  name?: string;
  timer?: string;
  scheduledTime?: string;
  isCompleted?: boolean;
}

export interface ITasks {
  tasks: ITask[];
}