import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateOverdoseDto } from './dto/create-overdose.dto';
import { UpdateOverdoseDto } from './dto/update-overdose.dto';
import { OverdoseService } from './overdose.service';

@Controller('overdose') //everything is going to have 'overdose' as route prefixe
export class OverdoseController {
  constructor(private readonly overdoseService: OverdoseService) {}
  //the class OverdoseService will be seen as a type and and the get instatiated automatically

  //GET /overdose
  @Get()
  getOverdose() {
    return this.overdoseService.getAllOverdose();
  }
  //GET /overdose?album=whatever
  @Get('/filter')
  getOverdoseType(@Query('album') album: 'kissland' | 'trilogy') {
    return this.overdoseService.getOverdose(album);
  }
  //GET /overdose/:id
  @Get(':id')
  getOneOverdose(@Param('id') id: string) {
    return this.overdoseService.getOneOverdose(id);
  }
  //POST /overdose
  @Post()
  postOverdose(@Body() createOverdoseDto: CreateOverdoseDto) {
    return this.overdoseService.postOverdose(createOverdoseDto);
  }
  //PUT /overdose/:id
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateOverdoseDto: UpdateOverdoseDto,
  ) {
    return this.overdoseService.updateOverdose(id, updateOverdoseDto);
  }
  //DELETE overdose/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.overdoseService.deleteOverdose(id);
  }
}
