import { ApiClient } from './ApiClient';
import { Request } from '@/app/models/contracts/Request';
import { Response } from '@/app/models/contracts/Response';
import { BaseFilter } from '@/app/models/contracts/filters/BaseFilter';

const api = new ApiClient();
const controllerName = 'User';

export const UserService = {

  createUser: (data: Request<BaseFilter>): Promise<Response> =>
    api.request('GET', controllerName, data),

};

// ejemplos de uso
//   getUsers: (): Promise<UserResponse[]> =>
//     api.request('GET', '/users'),

//   getUserById: (id: number): Promise<UserResponse> =>
//     api.request('GET', `/users/${id}`),

//   createUser: (data: CreateUserRequest): Promise<UserResponse> =>
//     api.request('POST', '/users', data),

//   updateUser: (id: number, data: CreateUserRequest): Promise<UserResponse> =>
//     api.request('PUT', `/users/${id}`, data),

//   deleteUser: (id: number): Promise<void> =>
//     api.request('DELETE', `/users/${id}`),