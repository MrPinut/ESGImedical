import axios, { AxiosError, Canceler, CancelToken } from "axios";

import { UserDTO, UserTransformer } from "../dto";

export class UserService {
  private static instance?: UserService;

  public static getInstance(): UserService {
    if (UserService.instance === undefined) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  private constructor() {}

  async addUser(create: any): Promise<UserDTO | undefined> {
    const user = await axios.post("http://localhost:3001/user/addUser", create);
    if (user) {
      return create;
    }
    return undefined;
  }

  async getUser(address: string): Promise<UserDTO | undefined> {
    try {
      const response = await axios.get(`http://localhost:3001/user/${address}`);
      if (response.data) {
        console.log(response.data.subscription);

        return UserTransformer({
          account: response.data.account,
          subscription: response.data.subscription,
          subscriptionDate: response.data.subscriptionDate,
          roleName: response.data.roleName,
        });
      }
    } catch (err) {
      if (
        err instanceof AxiosError &&
        err.response &&
        err.response.status === 404
      ) {
        return undefined;
      }
      throw err;
    }
  }
  async deleteAccount(address: string) {
    try {
      const user = await axios.delete(`http://localhost:3001/user/${address}`);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
