import { Injectable } from '@nestjs/common';
import { CreateOverdoseDto } from './dto/create-overdose.dto';
import { UpdateOverdoseDto } from './dto/update-overdose.dto';

@Injectable()
export class OverdoseService {
  private overdose = [
    { id: '0', name: 'love in the sky', album: 'kissland' },
    { id: '1', name: 'thursday', album: 'trilogy' },
  ];
  getAllOverdose() {
    return this.overdose;
  }
  getOverdose(album?: 'kissland' | 'trilogy') {
    //filter ovedose songs based on albums
    if (album) {
      return this.overdose.filter((item) => item.album === album);
    }
    return this.overdose;
  }
  getOneOverdose(id: string) {
    const song = this.overdose.find((item) => item.id === id);

    if (!song) throw new Error('the song is unavailable');

    return song;
  }
  postOverdose(createSong: CreateOverdoseDto) {
    const newSong = {
      ...createSong,
      id: Date.now().toString(),
    };
    return this.overdose.push(newSong);
  }
  updateOverdose(id: string, updateSong: UpdateOverdoseDto) {
    this.overdose = this.overdose.map((item) => {
      if (item.id === id) {
        return { ...item, ...updateSong };
      }
      return item;
    });

    return this.getOneOverdose(id);
  }

  deleteOverdose(id: string) {
    const toBeRemoved = this.getOneOverdose(id);

    this.overdose = this.overdose.filter((item) => item.id !== id);

    return toBeRemoved;
  }
}
