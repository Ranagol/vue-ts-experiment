import AxiosService from './AxiosService';

class UserService
{
    public static async getUsers()
    {
        return AxiosService.get('users');
    }
}