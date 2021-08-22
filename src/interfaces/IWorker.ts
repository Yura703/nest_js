import { Document } from 'mongoose';

type Jobs = {
    jobId: string;
    date: Date;
    time: number;
  }
  
export interface IWorker extends Document {
    name: string;
    jobs?: Jobs;
}

