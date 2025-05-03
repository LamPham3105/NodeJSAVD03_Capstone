import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(
    private readonly jwtService: JwtService,
    private prismaService: PrismaService,
  ) {}

  async deleteFriend(id: number) {
    const friendship = await this.prismaService.friend.findUnique({
      where: { id },
    });

    if (!friendship) {
      throw new Error('Friendship not found');
    }

    return await this.prismaService.friend.delete({
      where: { id },
    });
  }

  async addFriend(data: {
    userId: number;
    friendId: number;
    roomChat: string;
  }) {
    const existingFriendship = await this.prismaService.friend.findFirst({
      where: {
        OR: [
          { userId: data.userId, friendId: data.friendId },
          { userId: data.friendId, friendId: data.userId },
        ],
      },
    });

    if (existingFriendship) {
      throw new Error('Friendship already exists');
    }

    return await this.prismaService.friend.create({
      data: {
        userId: data.userId,
        friendId: data.friendId,
        roomChat: data.roomChat,
      },
    });
  }

  async createUser(userData: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
  }): Promise<any> {
    try {
      const existingUser = await this.prismaService.users.findUnique({
        where: { username: userData.username },
      });

      if (existingUser) {
        return { success: false, message: 'Username already exists' };
      }

      // Check if the email already exists
      const existingEmail = await this.prismaService.users.findUnique({
        where: { email: userData.email },
      });

      if (existingEmail) {
        return { success: false, message: 'Email already exists' };
      }

      // Check if the phone number already exists
      const existingPhoneNumber = await this.prismaService.users.findUnique({
        where: { phone_number: userData.phoneNumber }, // Changed to camelCase
      });

      if (existingPhoneNumber) {
        return { success: false, message: 'Phone number already exists' };
      }

      // Hash the password (no need to manually generate salt)
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      // Create the user in the database
      const newUser = await this.prismaService.users.create({
        data: {
          first_name: userData.firstName,
          last_name: userData.lastName,
          username: userData.username,
          email: userData.email,
          phone_number: userData.phoneNumber, // Changed to camelCase
          password: hashedPassword,
        },
        select: {
          id: true,
          first_name: true,
          last_name: true,
          username: true,
          email: true,
          phone_number: true, // Changed to camelCase
        },
      });

      return {
        success: true,
        message: 'Account created successfully',
        user: newUser,
      };
    } catch (error) {
      return {
        success: false,
        message: 'An error occurred, please try again.',
      };
    }
  }

  async login(user: any) {
    // Ensure the user is valid
    if (!user || !user.usernameOrEmail || !user.password) {
      return { success: false, message: 'Vui lòng nhập đầy đủ thông tin' };
    }

    const userFind = await this.findByUsername(user.usernameOrEmail);

    // Handle case where user is not found in the database
    if (!userFind) {
      return {
        success: false,
        message: 'Tên người dùng hoặc email không hợp lệ',
      };
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(
      user.password,
      userFind.password,
    );
    if (!isPasswordValid) {
      return { success: false, message: 'Mật khẩu không chính xác' };
    }

    // Create the payload for the JWT
    const payload = { username: userFind.username, sub: userFind.id };

    // Generate the access token using the payload
    const accessToken = this.jwtService.sign(payload);

    return {
      success: true,
      accessToken,
      user: userFind.id,
    };
  }

  async getUserById(id: number) {
    const user = this.prismaService.users.findUnique({
      where: { id: Number(id) },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async validateUser(username: string, password: string): Promise<any | null> {
    const user = await this.findByUsername(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async findByUsername(username?: string): Promise<any | null> {
    return this.prismaService.users.findUnique({
      where: { username },
    });
  }

  async getAllUsers() {
    return await this.prismaService.user.findMany({
      select: {
        userId: true,
        account: true,
        name: true,
        nationality: true,
        chanalName: true,
        avatar: true,
        desciption: true,
        banner: true,
        role: true,
      },
    });
  }

  async findDiscuss(discussId: number) {
    return await this.prismaService.discuss.findUnique({
      where: { discussId },
      include: {
        comments: true,
      },
    });
  }

  async findUser(userId: number) {
    return await this.prismaService.user.findUnique({
      where: { userId },
      select: {
        userId: true,
        account: true,
        name: true,
        nationality: true,
        chanalName: true,
        avatar: true,
        desciption: true,
        banner: true,
        role: true,
      },
    });
  }

  async isFollowing(userId: number, followingUserId: number) {
    const following = await this.prismaService.follow.findFirst({
      where: {
        userId,
        followingUserId,
      },
    });

    return following !== null;
  }

  async getListFriends(userId: number) {
    return await this.prismaService.friend.findMany({
      where: {
        OR: [{ userId }, { friendId: userId }],
      },
      select: {
        userId: true,
        friendId: true,
        roomChat: true,
        user: {
          select: {
            userId: true,
            account: true,
            name: true,
            avatar: true,
          },
        },
      },
    });
  }

  async getMessagesByRoom(roomChat: string) {
    return await this.prismaService.message.findMany({
      where: { roomChat },
      select: {
        id: true,
        senderId: true,
        content: true,
        timeSend: true,
      },
      orderBy: {
        timeSend: 'asc',
      },
    });
  }
}
