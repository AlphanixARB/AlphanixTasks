import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'tasks',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'taskID', type: 'number'},
        {name: 'timer', type: 'string'},
        {name: 'scheduledTime', type: 'string'},
        {name: 'isCompleted', type: 'boolean'},
      ],
    }),
  ]
})
