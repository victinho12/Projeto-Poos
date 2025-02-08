import { Pool } from 'pg';
import { isYieldExpression } from 'typescript';

export const pool = new Pool({
    user: 'postgres',      
    host: 'localhost',        
    database: 'data-teste',   
    password: '1234',     
    port: 5432                 
  });

 