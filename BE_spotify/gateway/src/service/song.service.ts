import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SongService {
  constructor(@Inject('ORDER_NAME') private songService: ClientProxy) {}

  async getAllGenres() {
    return await lastValueFrom(this.songService.send('get-all-genres', ''));
  }

  async findSong(songId: number) {
    return await lastValueFrom(this.songService.send('find-song', songId));
  }

  async getAllSongs() {
    return await lastValueFrom(this.songService.send('get-all-songs', ''));
  }
}
