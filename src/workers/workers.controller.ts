import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { Worker } from './schemas/worker.schema';

import {
    ApiBearerAuth,
    ApiResponse,
    ApiOperation, ApiTags,
  } from '@nestjs/swagger';
//import { IWorker } from 'src/interfaces/IWorker';
import { CreateWorkerDto } from './dto/create-worker.dto';

  

@ApiBearerAuth()
@ApiTags('workers')
@Controller('workers')
export class WorkersController {

    constructor(private readonly workersService: WorkersService) {}

    @ApiOperation({ summary: 'Get worker by ID' })
    @ApiResponse({ status: 200, description: 'Return worker.'}) 
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Get(':id')
    async getOne(@Param('id') id: string): Promise<Worker> {
        return await this.workersService.getById(id);
    }

    @ApiOperation({ summary: 'Create worker' })
    @ApiResponse({ status: 201, description: 'The worker has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Post()
    async create(@Body('worker') createWorkerDto: CreateWorkerDto): Promise<Worker> {
        return await this.workersService.create(createWorkerDto);
    }
  
    @ApiOperation({ summary: 'Update worker' })
    @ApiResponse({ status: 201, description: 'The worker has been successfully updated.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Put(':id')
    async update(@Param('id') id: string, @Body('worker') workerData: CreateWorkerDto): Promise<Worker> {
      return await this.workersService.update(id, workerData);
    }

    @ApiOperation({ summary: 'Delete worker' })
    @ApiResponse({ status: 201, description: 'The worker has been successfully deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Worker> {
        return await this.workersService.remove(id);
    }




}
