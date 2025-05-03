import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('get-all-playlists')
  getAllPlaylists() {
    return this.appService.getAllPlaylists();
  }

  @MessagePattern('get-playlist-of-user')
  getPlaylistOfUser(@Payload() userId: number) {
    return this.appService.getPlaylistOfUser(userId);
  }

  @MessagePattern('add-playlist')
  addPlaylist(
    @Payload()
    data: {
      userId: number;
      imagePath: string;
      playlistName: string;
      description: string;
      createDate: Date;
    },
  ) {
    return this.appService.addPlaylist(data);
  }

  @MessagePattern('add-song-to-playlist')
  addSongToPlaylist(@Payload() data: { playlistId: number; songId: number[] }) {
    return this.appService.addSongToPlaylist(data);
  }

  @MessagePattern('get-songs-in-playlist')
  getSongsInPlaylist(@Payload() playlistId: number) {
    return this.appService.getSongsInPlaylist(playlistId);
  }

  @MessagePattern('edit-playlist')
  editPlaylist(
    @Payload()
    data: {
      playlistId: number;
      playlistName: string;
      description: string;
    },
  ) {
    return this.appService.editPlaylist(data.playlistId, data);
  }

  @MessagePattern('remove-playlist')
  removePlaylist(@Payload() playlistId: number) {
    return this.appService.removePlaylist(playlistId);
  }

  @MessagePattern('unfollow-playlist')
  unfollowPlaylist(@Payload() data: { userId: number; playlistId: number }) {
    return this.appService.unfollowPlaylist(data);
  }

  @MessagePattern('send-follow')
  sendFollow(@Payload() data: { userId: number; followingId: number }) {
    return this.appService.sendFollow(data);
  }

  @MessagePattern('play-music')
  playMusic(@Payload() data: { songId: number; userId: number }) {
    return this.appService.playMusic(data);
  }

  @MessagePattern('create-playlist')
  createPlaylist(
    @Payload()
    data: {
      userId: number;
      imagePath: string;
      playlistName: string;
      description: string;
    },
  ) {
    return this.appService.createPlaylist(data);
  }

  @MessagePattern('get-playlist-detail')
  getPlaylistDetail(@Payload() playlistId: number) {
    return this.appService.getPlaylistDetail(playlistId);
  }
}
