import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('add-friend') // Must match what Gateway sends
  addFriend(
    @Payload() data: { userId: number; friendId: number; roomChat: string },
  ) {
    return this.appService.addFriend(data);
  }

  @MessagePattern('delete-friend')
  deleteFriend(@Payload() id: number) {
    return this.appService.deleteFriend(id);
  }

  @MessagePattern('get-all-users')
  getAllUsers() {
    return this.appService.getAllUsers();
  }

  @MessagePattern('find-discuss')
  findDiscuss(@Payload() discussId: number) {
    return this.appService.findDiscuss(discussId);
  }

  @MessagePattern('find-user')
  findUser(@Payload() userId: number) {
    return this.appService.findUser(userId);
  }

  @MessagePattern('is-following')
  isFollowing(@Payload() data: { userId: number; followingUserId: number }) {
    return this.appService.isFollowing(data.userId, data.followingUserId);
  }

  @MessagePattern('get-list-friends')
  getListFriends(@Payload() userId: number) {
    return this.appService.getListFriends(userId);
  }

  @MessagePattern('messages/byRoom')
  getMessagesByRoom(@Payload() roomChat: string) {
    return this.appService.getMessagesByRoom(roomChat);
  }
}
