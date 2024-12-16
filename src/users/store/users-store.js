// import { User } from "../models/users";
import { loadUsersByPage } from "../use-cases/load-users";

const state = {
  currentPage: 0,
  users: [],
}

const loadNextPage = async() => {
  const users = await loadUsersByPage( state.currentPage + 1 );
  if ( state.users.length === 0 ) return;

  state.currentPage += 1;
  state.users = users;
}

const loadPreviousPage = async ()=>{
 throw new Error ('no implementado');
}
const onUserChanged =  ()=>{
 throw new Error ('no implementado');
}
const reloadPage = async ()=>{
 throw new Error ('no implementado');
}


export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
/**
 * 
 * @returns {User[]}
 */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {number}
     */
    getCurrentPage : () => state.currentPage,
}

