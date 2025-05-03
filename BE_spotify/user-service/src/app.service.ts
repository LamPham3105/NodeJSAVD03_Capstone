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
    const friendship = await this.prismaService.list_friends.findUnique({
      where: { id },
    });

    if (!friendship) {
      throw new Error('Friendship not found');
    }

    return await this.prismaService.list_friends.delete({
      where: { id },
    });
  }

  async addFriend(data: {
    userId: number;
    friendId: number;
    roomChat: string;
  }) {
    const existingFriendship = await this.prismaService.list_friends.findFirst({
      where: {
        OR: [
          { user_id: data.userId, friend_id: data.friendId },
          { user_id: data.friendId, friend_id: data.userId },
        ],
      },
    });

    if (existingFriendship) {
      throw new Error('Friendship already exists');
    }

    return await this.prismaService.list_friends.create({
      data: {
        user_id: data.userId,
        friend_id: data.friendId,
        room_chat: data.roomChat,
      },
    });
  }

  async createUser(userData: {
    name: string;
    account: string;
    email: string;
    password: string;
  }): Promise<any> {
    try {
      const existingUser = await this.prismaService.users.findUnique({
        where: { account: userData.account },
      });

      if (existingUser) {
        return { success: false, message: 'Username already exists' };
      }

      // Check if the email already exists
      const existingEmail = await this.prismaService.users.findUnique({
        where: { account: userData.email }, // Ensure email uniqueness with 'account' if necessary
      });

      if (existingEmail) {
        return { success: false, message: 'Email already exists' };
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(userData.password, 10);

      // Create the user in the database
      const newUser = await this.prismaService.users.create({
        data: {
          account: userData.account,
          name: userData.name,
          nationality: '',
          chanal_name: '',
          avatar: '',
          desciption: '',
          refresh_token: '',
          password: hashedPassword,
          role: 'user',
        },
        select: {
          user_id: true,
          account: true,
          name: true,
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
      where: { user_id: Number(id) },
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

  async findByUsername(account?: string): Promise<any | null> {
    return this.prismaService.users.findUnique({
      where: { account },
    });
  }

  async getAllUsers() {
    return await this.prismaService.users.findMany({
      select: {
        user_id: true,
        account: true,
        name: true,
        nationality: true,
        chanal_name: true,
        avatar: true,
        desciption: true,
        banner: true,
        role: true,
      },
    });
  }

  async findDiscuss(discussId: number) {
    return await this.prismaService.comments.findUnique({
      where: { discuss_id: discussId },
      include: {
        comments: true,
      },
    });
  }

  async findUser(userId: number) {
    return await this.prismaService.users.findUnique({
      where: { user_id: userId },
      select: {
        user_id: true,
        account: true,
        name: true,
        nationality: true,
        chanal_name: true,
        avatar: true,
        desciption: true,
        banner: true,
        role: true,
      },
    });
  }

  async isFollowing(userId: number, followingUserId: number) {
    const following = await this.prismaService.list_friends.findFirst({
      where: {
        user_id: userId,
        friend_id: followingUserId,
      },
    });

    return following !== null;
  }

  async getListFriends(userId: number) {
    return await this.prismaService.list_friends.findMany({
      where: {
        OR: [{ user_id: userId }, { friend_id: userId }],
      },
      select: {
        id: true,
        user_id: true,
        friend_id: true,
        room_chat: true,
        users_list_friends_user_idTousers: {
          select: {
            user_id: true,
            account: true,
            name: true,
            avatar: true,
          },
        },
        users_list_friends_friend_idTousers: {
          select: {
            user_id: true,
            account: true,
            name: true,
            avatar: true,
          },
        },
      },
    });
  }

  async getMessagesByRoom(roomChat: string) {
    return await this.prismaService.messages.findMany({
      where: { room_chat: roomChat },
      select: {
        id: true,
        id_sender: true,
        content_mess: true,
        time_send: true,
      },
      orderBy: {
        time_send: 'asc',
      },
    });
  }
}
