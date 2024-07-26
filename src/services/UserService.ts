import AxiosService from './AxiosService';

class UserService
{
    public static async getUsers(): Promise<[]>
    {
        return AxiosService.get('/users');
    }
}

export default UserService;