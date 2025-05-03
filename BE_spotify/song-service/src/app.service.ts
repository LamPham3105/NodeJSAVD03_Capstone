import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllGenres() {
    return await this.prisma.genres.findMany({
      select: {
        genre_id: true,
        name_genre: true,
        create_time: true,
      },
    });
  }

  async findSongById(songId: number) {
    return await this.prisma.songs.findUnique({
      where: { song_id: songId },
      include: {
        genres: true, // Include genre info if needed
      },
    });
  }

  async getAllSongs() {
    return await this.prisma.songs.findMany({
      select: {
        song_id: true,
        song_name: true,
        description: true,
        public_date: true,
        genres: true,
        duration: true,
        viewer: true,
      },
    });
  }
}
