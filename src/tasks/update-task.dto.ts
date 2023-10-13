import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CanBeUndefined } from '../utils/can-be-undefined';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @CanBeUndefined()
  title?: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string | null;
  @IsBoolean()
  @CanBeUndefined()
  isCompleted?: boolean;
}
