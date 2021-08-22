import { Document } from 'mongoose';

export interface IJob extends Document {
    title: string; 
    salary: number;  
}
