import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string | null;
  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;
}
