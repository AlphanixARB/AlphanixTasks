import { Q } from "@nozbe/watermelondb";
import { database } from "../models/database";
import { ITask } from "../types/Task";
import { HashCode } from "./Hash";
import { CancelNotification, ScheduleNotification } from "./Notifications";

export async function handleAddTask(name: string, scheduledTime: any, timer?: Date, repeat?: boolean) {  
    await database.write(async () => {
        await database.get('tasks').create((task) => {
            task.name = name;
            task.isCompleted = false;
            task.taskID = HashCode(String(task.id));
            task.timer = timer != undefined ? String(timer) : '';
            if( scheduledTime != null ){
                task.scheduledTime = String(scheduledTime);  
                ScheduleNotification(scheduledTime, false, task);
            }if ( scheduledTime === undefined ){
                task.scheduledTime = '';
            }
        });
    });
}

export async function handleUpdateTask(tasks: ITask, variable: string, value?: any) {
    await database.write(async () => {
        const task = (await database
            .get('tasks')
            .find(tasks.id)) as any;
        await task.update(() => {
            if(variable === 'name'){
                task.name = value;
            }
            if(variable === 'scheduledTime'){
                task.scheduledTime = String(value);
                CancelNotification(HashCode(task.id));
                ScheduleNotification(value, false, tasks);
            }
            if(variable === 'isCompleted'){
                if(task.isCompleted != true){
                    task.isCompleted = true;
                    console.log('1')
                }else{
                    task.isCompleted = false;
                    console.log('2')
                } 
            }  
        });
    });
}

export async function handleUpdateQueryTask(query: string, value: any) {
    await database.write(async () => {
        const task = (await database
            .get('tasks')
            .query(Q.where(query, value)).fetch()) as any;
        console.log('12 :' ,task[0].id);
        await task[0].update(() => {
          if(task[0].isCompleted != true){
              task[0].isCompleted = true;
              console.log('2')
          }else{
              task[0].isCompleted = false;
              console.log('3')
          }  
        });
    });
}

export async function handleDeleteTask(tasks: ITask) {
    await database.write(async () => {
      const task = await database.get('tasks').find(tasks.id);
      await task.destroyPermanently();
      CancelNotification(HashCode(task.id));
    });
}