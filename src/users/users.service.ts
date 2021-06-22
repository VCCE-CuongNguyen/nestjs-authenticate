import { Injectable } from '@nestjs/common';

export type User = {
  email: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  async findOne(username: string): Promise<User | undefined> {
    return {
      email: 'cuong.nguyen@vcc.exchange',
      username,
      password: 'secret',
    };
  }
}
