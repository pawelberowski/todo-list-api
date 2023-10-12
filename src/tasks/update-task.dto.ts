import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { CanBeUndefined } from '../utils/can-be-undefined';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @CanBeUndefined()
  title?: string;
  @IsString()
  @IsNotEmpty()
  @CanBeUndefined()
  description?: string | null;
  @IsBoolean()
  @CanBeUndefined()
  isCompleted?: boolean;
}
