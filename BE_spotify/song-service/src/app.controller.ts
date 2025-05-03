import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get-all-genres')
  getAllGenres() {
    return this.appService.getAllGenres();
  }

  @MessagePattern('find-song')
  findSong(@Payload() songId: number) {
    return this.appService.findSongById(songId);
  }

  // Get all songs
  @MessagePattern('get-all-songs')
  getAllSongs() {
    return this.appService.getAllSongs();
  }
}
