import { localhostUserToModel } from "../mappers/localhost-user.mappers";
import { User } from "../models/users";
// import { User } from "../models/users";


/**
 * 
 * @param {Number} page 
 * @returns {promise<User>}
 */
export const loadUsersByPage = async (page =1 ) =>{
    const url = `${ import.meta.env.VITE_BASE_URL}/users?_page=${ page }`;
    const res = await fetch (url);
    const data = await res.json();
    

    //asi lo hice: 
    // const users = [localhostUserToModel(data)]
    

    //asi lo hizo fernando:
    const users = data.map (localhostUserToModel);
    


    
    console.log (users);
}


