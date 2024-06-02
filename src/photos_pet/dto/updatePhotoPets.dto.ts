import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotoPetsDto } from './createPhotoPets.dto';

export class UpdatePhotoPetsDto extends PartialType(CreatePhotoPetsDto) { }
