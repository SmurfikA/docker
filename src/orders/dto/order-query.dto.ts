import {
  IsOptional,
  IsEnum,
  IsInt,
  Min,
} from 'class-validator';

import { Type } from 'class-transformer';

import { OrderStatus } from '../../common/enums/order-status.enum';

export class OrderQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  pageSize?: number = 10;

  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;
}