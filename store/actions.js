export const PUT_USERNAME_DATA = 'PUT_USERNAME_DATA';
export const PUT_GROUP_DATA = 'PUT_GROUP_DATA';
export const PUT_CONNECT_DATA = 'PUT_CONNECT_DATA';


export const setUserName = (username)=>({
    type: PUT_USERNAME_DATA,
    payload: username
})