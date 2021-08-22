import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkersController } from './workers/workers.controller';
import { JobsController } from './jobs/jobs.controller';
import { JobsService } from './jobs/jobs.service';
import { WorkersService } from './workers/workers.service';
import { WorkersModule } from './workers/workers.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/homework7', { useNewUrlParser: true }),
    WorkersModule,
    JobsModule,
  ],
  controllers: [AppController, WorkersController, JobsController],
  providers: [AppService, JobsService, WorkersService],
})
export class AppModule {}
