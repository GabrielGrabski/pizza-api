import { UserRequest } from "../../model/user/UserRequest";

export class UserService {
  async create(user: UserRequest): Promise<UserRequest> {
    return user;
  }
}
