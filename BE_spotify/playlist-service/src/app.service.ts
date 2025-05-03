import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getAllPlaylists() {
    return this.prisma.playlist.findMany({
      include: { PlaylistSongs: true, User: true },
    });
  }

  getPlaylistOfUser(userId: number) {
    return this.prisma.playlist.findMany({
      where: { userId },
      include: { PlaylistSongs: true },
    });
  }

  addPlaylist(data: {
    userId: number;
    imagePath: string;
    playlistName: string;
    description: string;
    createDate: Date;
  }) {
    return this.prisma.playlist.create({
      data,
    });
  }

  addSongToPlaylist(data: { playlistId: number; songId: number[] }) {
    const operations = data.songId.map((songId) =>
      this.prisma.playlistSong.create({
        data: {
          playlistId: data.playlistId,
          songId,
        },
      }),
    );
    return this.prisma.$transaction(operations);
  }

  getSongsInPlaylist(playlistId: number) {
    return this.prisma.playlistSong.findMany({
      where: { playlistId },
      include: { Song: true },
    });
  }

  editPlaylist(
    playlistId: number,
    body: { playlistName: string; description: string },
  ) {
    return this.prisma.playlist.update({
      where: { id: playlistId },
      data: {
        playlistName: body.playlistName,
        description: body.description,
      },
    });
  }

  removePlaylist(playlistId: number) {
    return this.prisma.playlist.delete({
      where: { id: playlistId },
    });
  }

  unfollowPlaylist(data: { userId: number; playlistId: number }) {
    return this.prisma.playlist.update({
      where: { id: data.playlistId },
      data: {
        followers: {
          disconnect: { id: data.userId },
        },
      },
    });
  }

  sendFollow(data: { userId: number; followingId: number }) {
    try {
      return this.prisma.user.update({
        where: { id: data.userId },
        data: {
          following: {
            connect: { id: data.followingId },
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to follow user: ${error.message}`);
    }
  }

  playMusic(data: { songId: number; userId: number }) {
    try {
      // Optional: Log the playback in a separate table or update viewer count
      this.prisma.song.update({
        where: { songId: data.songId },
        data: {
          viewer: {
            increment: 1,
          },
        },
      });

      // Optionally return the song info
      const song = this.prisma.song.findUnique({
        where: { songId: data.songId },
      });

      return {
        message: 'Song is being played',
        song,
      };
    } catch (error) {
      throw new Error(`Failed to play music: ${error.message}`);
    }
  }

  async createPlaylist(data: {
    userId: number;
    imagePath: string;
    playlistName: string;
    description: string;
  }) {
    return await this.prisma.playlist.create({
      data: {
        userId: data.userId,
        imagePath: data.imagePath,
        playlistName: data.playlistName,
        description: data.description,
        createDate: new Date(),
      },
    });
  }

  async getPlaylistDetail(playlistId: number) {
    return await this.prisma.playlist.findUnique({
      where: {
        id: playlistId,
      },
      include: {
        PlaylistSongs: {
          include: {
            Song: true, // Include songs data in playlist
          },
        },
      },
    });
  }
}
