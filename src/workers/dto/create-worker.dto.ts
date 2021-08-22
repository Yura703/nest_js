import { Prop } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

export class CreateWorkerDto {
    readonly name: string;
    readonly jobs?: Jobs[];
  }  

  export class Jobs {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }) 
    jobId: string;

    @Prop({ type: Date, default: Date.now })
    date: Date;

    @Prop({  type: Number, max: 20 })
    time: number;
  }
  
 
  