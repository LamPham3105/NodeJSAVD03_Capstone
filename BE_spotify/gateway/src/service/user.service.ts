import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(@Inject('USER_NAME') private userService: ClientProxy) {}

  async addFriend(data: any) {
    return await lastValueFrom(this.userService.send('add-friend', data));
  }

  async deleteFriend(id: number) {
    return await lastValueFrom(this.userService.send('delete-friend', id));
  }

  async getAllUsers() {
    return await lastValueFrom(this.userService.send('get-all-users', ''));
  }

  async findDiscuss(discussId: number) {
    return await lastValueFrom(
      this.userService.send('find-discuss', discussId),
    );
  }

  async findUser(userId: number) {
    return await lastValueFrom(this.userService.send('find-user', userId));
  }

  async isFollowing(data: any) {
    return await lastValueFrom(this.userService.send('is-following', data));
  }

  async getListFriends(userId: number) {
    return await lastValueFrom(
      this.userService.send('get-list-friends', userId),
    );
  }

  async getMessagesByRoom(roomChat: string) {
    return await lastValueFrom(
      this.userService.send('messages/byRoom', roomChat),
    );
  }
}
