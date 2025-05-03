import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllPlaylists() {
    return await this.prisma.playlists.findMany({
      include: {
        playlist_songs: {
          include: { songs: true },
        },
        users: true,
      },
    });
  }

  async getPlaylistOfUser(userId: number) {
    return await this.prisma.playlists.findMany({
      where: { user_id: userId },
      include: {
        playlist_songs: {
          include: { songs: true },
        },
      },
    });
  }

  async addPlaylist(data: {
    userId: number;
    imagePath: string;
    playlistName: string;
    description: string;
    createDate: Date;
  }) {
    return await this.prisma.playlists.create({
      data: {
        user_id: data.userId,
        image_path: data.imagePath,
        playlist_name: data.playlistName,
        description: data.description,
        create_date: data.createDate,
      },
    });
  }

  async addSongToPlaylist(data: { playlistId: number; songId: number[] }) {
    const operations = await data.songId.map((songId) =>
      this.prisma.playlist_songs.create({
        data: {
          playlist_id: data.playlistId,
          song_id: songId,
        },
      }),
    );
    return this.prisma.$transaction(operations);
  }

  async getSongsInPlaylist(playlistId: number) {
    return await this.prisma.playlist_songs.findMany({
      where: { playlist_id: playlistId },
      include: { songs: true },
    });
  }

  async editPlaylist(
    playlistId: number,
    body: { playlistName: string; description: string },
  ) {
    return await this.prisma.playlists.update({
      where: { id: playlistId },
      data: {
        playlist_name: body.playlistName,
        description: body.description,
      },
    });
  }

  async removePlaylist(playlistId: number) {
    return await this.prisma.playlists.delete({
      where: { id: playlistId },
    });
  }

  async createPlaylist(data: {
    userId: number;
    imagePath: string;
    playlistName: string;
    description: string;
  }) {
    return await this.prisma.playlists.create({
      data: {
        user_id: data.userId,
        image_path: data.imagePath,
        playlist_name: data.playlistName,
        description: data.description,
        create_date: new Date(),
      },
    });
  }

  async getPlaylistDetail(playlistId: number) {
    return await this.prisma.playlists.findUnique({
      where: { id: playlistId },
      include: {
        playlist_songs: {
          include: { songs: true },
        },
      },
    });
  }

  async sendFollow(data: { userId: number; followingId: number }) {
    return await this.prisma.list_friends.create({
      data: {
        user_id: data.userId,
        friend_id: data.followingId,
        room_chat: `room_${data.userId}_${data.followingId}`,
      },
    });
  }

  async playMusic(data: { songId: number; userId: number }) {
    try {
      await this.prisma.songs.update({
        where: { song_id: data.songId },
        data: {
          viewer: {
            increment: 1,
          },
        },
      });

      const song = await this.prisma.songs.findUnique({
        where: { song_id: data.songId },
      });

      return {
        message: 'Song is being played',
        song,
      };
    } catch (error) {
      throw new Error(`Failed to play music: ${error.message}`);
    }
  }

  async unfollowPlaylist(data: { userId: number; playlistId: number }) {
    return await this.prisma.playlist_follows.delete({
      where: {
        user_id_playlist_id: {
          user_id: data.userId,
          playlist_id: data.playlistId,
        },
      },
    });
  }
}
