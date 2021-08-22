import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

@Schema()
export class Job {

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  @Prop({min: 0})
  salary: number;
}

export const JobSchema = SchemaFactory.createForClass(Job);