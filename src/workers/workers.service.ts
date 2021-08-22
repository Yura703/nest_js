import { Injectable } from '@nestjs/common';
import { IWorker } from 'src/interfaces/IWorker';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
//import { Worker, WorkerDocument } from './schemas/worker.schema';
import { Worker, WorkerDocument } from './schemas/worker.schema';
import { CreateWorkerDto } from './dto/create-worker.dto';

@Injectable()
export class WorkersService {

    constructor(@InjectModel(Worker.name) private workerModel: Model<WorkerDocument>) {}

    async getById(id: string): Promise<Worker> {
       return this.workerModel.findById(id); 
    }

    async update(id: string, createWorkerDto: CreateWorkerDto): Promise<Worker> {
        return this.workerModel.findByIdAndUpdate(id, createWorkerDto, {new: true});
    }

    async remove(id: string): Promise<Worker> {
        return this.workerModel.findByIdAndRemove(id);
    }

    async create(createWorkerDto: CreateWorkerDto): Promise<Worker> {
        const newWorker = new this.workerModel(createWorkerDto);
        return newWorker.save();
    }





}
