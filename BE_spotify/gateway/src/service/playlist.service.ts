import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PlaylistService {
  constructor(@Inject('PLAYLIST_NAME') private playlistService: ClientProxy) {}

  async getAllPlaylists() {
    return await lastValueFrom(
      this.playlistService.send('get-all-playlists', ''),
    );
  }

  async getPlaylistOfUser(userId: number) {
    return await lastValueFrom(
      this.playlistService.send('get-playlist-of-user', userId),
    );
  }

  async addPlaylist(data: any) {
    return await lastValueFrom(this.playlistService.send('add-playlist', data));
  }

  async addSongToPlaylist(data: any) {
    return await lastValueFrom(
      this.playlistService.send('add-song-to-playlist', data),
    );
  }

  async getSongsInPlaylist(playlistId: number) {
    return await lastValueFrom(
      this.playlistService.send('get-songs-in-playlist', playlistId),
    );
  }

  async editPlaylist(data: any) {
    return await lastValueFrom(
      this.playlistService.send('edit-playlist', data),
    );
  }

  async removePlaylist(playlistId: number) {
    return await lastValueFrom(
      this.playlistService.send('remove-playlist', playlistId),
    );
  }

  async unfollowPlaylist(data: any) {
    return await lastValueFrom(
      this.playlistService.send('unfollow-playlist', data),
    );
  }

  async sendFollow(data: any) {
    return await lastValueFrom(this.playlistService.send('send-follow', data));
  }

  async playMusic(data: any) {
    return await lastValueFrom(this.playlistService.send('play-music', data));
  }

  async createPlaylist(data: any) {
    return await lastValueFrom(
      this.playlistService.send('create-playlist', data),
    );
  }

  async getPlaylistDetail(playlistId: number) {
    return await lastValueFrom(
      this.playlistService.send('get-playlist-detail', playlistId),
    );
  }
}
