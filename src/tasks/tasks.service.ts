import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { PrismaService } from '../database/prisma.service';
import { Prisma } from '@prisma/client';
import { PrismaError } from '../database/prisma-error.enum';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.task.findMany();
  }

  async getById(id: number) {
    const task = await this.prismaService.task.findUnique({
      where: {
        id,
      },
    });
    if (!task) {
      throw new NotFoundException();
    }
    return task;
  }

  create(task: TaskDto) {
    return this.prismaService.task.create({
      data: task,
    });
  }

  async update(id: number, task: TaskDto) {
    try {
      return await this.prismaService.task.update({
        data: {
          ...task,
          id: undefined,
        },
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new NotFoundException();
      }
      throw error;
    }
  }

  async delete(id: number) {
    try {
      return await this.prismaService.task.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === PrismaError.RecordDoesNotExist
      ) {
        throw new NotFoundException();
      }
      throw error;
    }
  }
}
