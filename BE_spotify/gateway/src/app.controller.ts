import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('PLAYLIST_NAME') private playlistService: ClientProxy,
    @Inject('USER_NAME') private userService: ClientProxy,
    @Inject('SONG_NAME') private songService: ClientProxy,
  ) {}

  //Playlist service

  @Get('get-all-playlists')
  async getAllPlaylists() {
    const result = await lastValueFrom(
      this.playlistService.send('get-all-playlists', ''),
    );
    return result;
  }

  @Get('get-playlist-of-user')
  async getPlaylistOfUser(@Query('userId') userId: number) {
    const result = await lastValueFrom(
      this.playlistService.send('get-playlist-of-user', userId),
    );
    return result;
  }

  @Post('add-playlist')
  async addPlaylist(
    @Body()
    data: {
      userId: number;
      imagePath: string;
      playlistName: string;
      description: string;
      createDate: Date;
    },
  ) {
    const result = await lastValueFrom(
      this.playlistService.send('add-playlist', data),
    );
    return result;
  }

  @Post('add-song-to-playlist')
  async addSongToPlaylist(
    @Body() data: { playlistId: number; songId: number[] },
  ) {
    const result = await lastValueFrom(
      this.playlistService.send('add-song-to-playlist', data),
    );
    return result;
  }

  @Get('get-songs-in-playlist/:playlistId')
  async getSongsInPlaylist(@Param('playlistId') playlistId: number) {
    const result = await lastValueFrom(
      this.playlistService.send('get-songs-in-playlist', playlistId),
    );
    return result;
  }

  @Post('edit-playlist')
  async editPlaylist(
    @Body()
    data: {
      playlistId: number;
      playlistName: string;
      description: string;
    },
  ) {
    const result = await lastValueFrom(
      this.playlistService.send('edit-playlist', data),
    );
    return result;
  }

  @Post('remove-playlist')
  async removePlaylist(@Body('playlistId') playlistId: number) {
    const result = await lastValueFrom(
      this.playlistService.send('remove-playlist', playlistId),
    );
    return result;
  }

  @Post('unfollow-playlist')
  async unfollowPlaylist(@Body() data: { userId: number; playlistId: number }) {
    const result = await lastValueFrom(
      this.playlistService.send('unfollow-playlist', data),
    );
    return result;
  }

  @Post('send-follow')
  async sendFollow(@Body() data: { userId: number; followingId: number }) {
    const result = await lastValueFrom(
      this.playlistService.send('send-follow', data),
    );
    return result;
  }

  @Post('play-music')
  async playMusic(@Body() data: { songId: number; userId: number }) {
    const result = await lastValueFrom(
      this.playlistService.send('play-music', data),
    );
    return result;
  }

  @Post('create-playlist')
  async createPlaylist(
    @Body()
    data: {
      userId: number;
      imagePath: string;
      playlistName: string;
      description: string;
    },
  ) {
    const result = await lastValueFrom(
      this.playlistService.send('create-playlist', data),
    );
    return result;
  }

  @Get('get-playlist-detail/:playlistId')
  async getPlaylistDetail(@Param('playlistId') playlistId: number) {
    const result = await lastValueFrom(
      this.playlistService.send('get-playlist-detail', playlistId),
    );
    return result;
  }

  //Song service

  @Get('get-all-genres')
  async getAllGenres() {
    const result = await lastValueFrom(
      this.songService.send('get-all-genres', ''),
    );
    return result;
  }

  @Get('find-song/:songId')
  async findSong(@Param('songId') songId: number) {
    const result = await lastValueFrom(
      this.songService.send('find-song', songId),
    );
    return result;
  }

  @Get('get-all-songs')
  async getAllSongs() {
    const result = await lastValueFrom(
      this.songService.send('get-all-songs', ''),
    );
    return result;
  }

  //User service

  @Post('add-friend')
  async addFriend(
    @Body() data: { userId: number; friendId: number; roomChat: string },
  ) {
    const result = await lastValueFrom(
      this.userService.send('add-friend', data),
    );
    return result;
  }

  @Post('delete-friend')
  async deleteFriend(@Body('id') id: number) {
    const result = await lastValueFrom(
      this.userService.send('delete-friend', id),
    );
    return result;
  }

  @Get('get-all-users')
  async getAllUsers() {
    const result = await lastValueFrom(
      this.userService.send('get-all-users', ''),
    );
    return result;
  }

  @Get('find-discuss/:discussId')
  async findDiscuss(@Param('discussId') discussId: number) {
    const result = await lastValueFrom(
      this.userService.send('find-discuss', discussId),
    );
    return result;
  }

  @Get('find-user/:userId')
  async findUser(@Param('userId') userId: number) {
    const result = await lastValueFrom(
      this.userService.send('find-user', userId),
    );
    return result;
  }

  @Get('is-following')
  async isFollowing(
    @Query('userId') userId: number,
    @Query('followingUserId') followingUserId: number,
  ) {
    const result = await lastValueFrom(
      this.userService.send('is-following', { userId, followingUserId }),
    );
    return result;
  }

  @Get('get-list-friends/:userId')
  async getListFriends(@Param('userId') userId: number) {
    const result = await lastValueFrom(
      this.userService.send('get-list-friends', userId),
    );
    return result;
  }

  @Get('messages/byRoom')
  async getMessagesByRoom(@Query('roomChat') roomChat: string) {
    const result = await lastValueFrom(
      this.userService.send('messages/byRoom', roomChat),
    );
    return result;
  }
}
