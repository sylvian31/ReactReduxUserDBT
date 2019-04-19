export const USER_SELECTED = 'USER_SELECTED';

export function selectUserAction(user){

    return {
        type: USER_SELECTED,
        payload: user
    }
    
}