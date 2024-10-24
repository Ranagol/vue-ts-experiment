import AxiosService from './AxiosService';

// Importing the User interface from the types folder. We must use here the 'type' keyword.
import type { User } from '../types/interfaces';

/**
 * This class sends gets data about the users from the API. For this, it uses the AxiosService class.
 */
class UserService {

    /**
     * The function that calls this getUsers() also must use async/await!!!
     * Here we do not use try/catch block, because we want to handle the error in the component.
     * 
     * @returns Promise<User[]>
     */
    public async getUsers(): Promise<User[]> {
        const response = await AxiosService.get('/users');
        return response.data as User[];
    }

    /**
     * The function that calls this getUserById() also must use async/await!!!
     * Here we do not use try/catch block, because we want to handle the error in the component.
     * 
     * @param id number
     * @returns Promise<User>
     */
    public async getUserById(id: number): Promise<User> {
        const response = await AxiosService.get(`/users/${id}`);
        return response.data as User;
    }

    public async updateUser(user: User): Promise<User> {
        const response = await AxiosService.put(`/users/${user.id}`, user);
        return response.data as User;
    }

    public async deleteUser(id: number): Promise<void> {
        const response = await AxiosService.delete(`/users/${id}`);
        return response.data;
    }
}

const userService = new UserService();

export default userService;

