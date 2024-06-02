import { PartialType } from '@nestjs/mapped-types';
import { CreatePhotoPetsDto } from 'src/photos_pet/dto/createPhotoPets.dto';

export class UpdatePhotoPetsDto extends PartialType(CreatePhotoPetsDto) { }
