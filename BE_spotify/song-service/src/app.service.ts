import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllGenres() {
    return await this.prisma.genre.findMany({
      select: {
        genreId: true,
        nameGenre: true,
        createTime: true,
      },
    });
  }

  async findSongById(songId: number) {
    return await this.prisma.song.findUnique({
      where: { songId },
      include: {
        genre: true, // Include genre info if needed
      },
    });
  }

  async getAllSongs() {
    return await this.prisma.song.findMany({
      select: {
        songId: true,
        songName: true,
        description: true,
        publicDate: true,
        genre: true,
        duration: true,
        viewer: true,
      },
    });
  }
}
