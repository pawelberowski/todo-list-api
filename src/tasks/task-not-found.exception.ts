import { NotFoundException } from '@nestjs/common';

export class TaskNotFoundException extends NotFoundException {
  constructor(taskId: number) {
    super(`Task with id ${taskId} not found`);
  }
}
