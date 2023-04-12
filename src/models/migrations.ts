import { schemaMigrations, addColumns } from '@nozbe/watermelondb/Schema/migrations';
  
export default schemaMigrations({
    migrations: [
        {
            toVersion: 3,
            steps: [
                addColumns({
                table: 'tasks',
                columns: [{ name: 'name', type: 'string' }],
                }),
            ],
        },
    ],
});