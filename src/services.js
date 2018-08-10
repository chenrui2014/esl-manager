import httpRequest from 'axios';
import * as global from './global';

export const api={
    login(username,password){
        return httpRequest.post(global.API_URL+'/login',{
            username:username,
            password:password,
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
    },
}