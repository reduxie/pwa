import { Pool } from 'pg';

const connectionString: string = `postgres://sdhwowxp:YqgxVs3KzJgOSwfyYlscqbaRiMqeU9gU@isilo.db.elephantsql.com:5432/sdhwowxp`;

export const connectToDb = () => new Pool({ connectionString, max: 2 });
