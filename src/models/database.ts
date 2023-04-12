import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import Task from './Task';
import schema from './schema';

const adapter = new SQLiteAdapter({
  dbName: 'TasksDB',
  schema,
});

export const database = new Database({
  adapter,
  modelClasses: [Task],
});