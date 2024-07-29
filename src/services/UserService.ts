import AxiosService from './AxiosService';

// Importing the User interface from the types folder. We must use here the 'type' keyword.
import type { User } from '../types/interfaces';

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
}

const userService = new UserService();

export default userService;

