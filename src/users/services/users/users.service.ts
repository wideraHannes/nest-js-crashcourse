import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { email: 'j@mail.com', username: 'John Doe' },
    { email: 'A@mail.com', username: 'Alice Caeiro' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userData: CreateUserDto) {
    this.fakeUsers.push(userData);
    return;
  }

  fetchUserById(userId: number) {
    return this.fakeUsers[0];
  }
}
