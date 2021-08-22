import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IJob } from 'src/interfaces/IJob';
import { Job } from '../../jobs/schemas/job.schema';
import { CreateWorkerDto, Jobs } from 'src/workers/dto/create-worker.dto';

export type WorkerDocument = Worker & Document;

@Schema()
export class Worker {
    @Prop({ required: true })
    name: string;

    @Prop([{ type: Jobs}])
    jobs: Jobs[];    
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);



// @Prop()
    // jobs: [ {
    //     @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }) 
    //     jobId: Job;

    //     @Prop({ type: Date, default: Date.now })
    //     date: Date;

    //     @Prop({  type: Number, max: 20 })
    //     time: number;  
    // } ]; 


    
// export const WorkerSchema = new mongoose.Schema({
//     name: {
//         type: mongoose.Schema.Types.String,        
//         required: true,
//     },  
//     jobs: [
//         {
//             jobId: { 
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Job', 
//             },
//             date: {
//                 type: mongoose.Schema.Types.Date,
//                 default: Date.now,
//             },
//             time: {
//                 type: mongoose.Schema.Types.Number,
//                 max: 20, 
//             },       
//             }
//         ], 
// }); 


