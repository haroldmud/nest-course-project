import { PartialType } from '@nestjs/mapped-types';
import { CreateOverdoseDto } from './create-overdose.dto';

export class UpdateOverdoseDto extends PartialType(CreateOverdoseDto) {
  id: string;
  name: string;
  album: 'kissland' | 'trilogy';
}
