import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export default class Task extends Model {
  static table = 'tasks';
  
  @field('name') name: any;
  @field('taskID') taskID: any;
  @field('timer') timer: any;
  @field('scheduledTime') scheduledTime: any;
  @field('isCompleted') isCompleted: any;
} 