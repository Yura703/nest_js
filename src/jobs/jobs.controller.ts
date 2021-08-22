import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './schemas/job.schema';

import {
    ApiBearerAuth,
    ApiResponse,
    ApiOperation, ApiTags,
  } from '@nestjs/swagger';


@ApiBearerAuth()
@ApiTags('jobs')
@Controller('jobs')
export class JobsController {

    constructor(private readonly jobsService: JobsService) {}

    @ApiOperation({ summary: 'Get job by ID' })
    @ApiResponse({ status: 200, description: 'Return job.'}) 
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Get(':id')
    async getOne(@Param('id') id: string): Promise<Job> {
        return await this.jobsService.getById(id);
    }

    @ApiOperation({ summary: 'Create job' })
    @ApiResponse({ status: 201, description: 'The job has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Post()
    async create(@Body('job') createJobDto: CreateJobDto): Promise<Job> {
        return this.jobsService.create(createJobDto);
    }
  
    @ApiOperation({ summary: 'Update job' })
    @ApiResponse({ status: 201, description: 'The job has been successfully updated.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Put(':id')
    async update(@Param('id') id: string, @Body('job') jobData: CreateJobDto): Promise<Job> {
      return this.jobsService.update(id, jobData);
    }

    @ApiOperation({ summary: 'Delete job' })
    @ApiResponse({ status: 201, description: 'The job has been successfully deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Job> {
        return this.jobsService.remove(id);
    }

}

