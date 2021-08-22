import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Job, JobDocument } from './schemas/job.schema';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {

    constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

    async getById(id: string): Promise<Job> {
       return this.jobModel.findById(id); 
    }

    async update(id: string, createJobDto: CreateJobDto): Promise<Job> {
        return this.jobModel.findByIdAndUpdate(id, createJobDto, {new: true});
    }

    async remove(id: string): Promise<Job> {
        return this.jobModel.findByIdAndRemove(id);
    }

    async create(createJobDto: CreateJobDto): Promise<Job> {
        const newJob = new this.jobModel(createJobDto);
        return newJob.save();
    }

}
