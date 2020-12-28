const initialState = {
    user:{
        id:null,
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        age:null,
        weight:null,
        height:null,
    }
}

const userReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'GET_USER':
            return{
                ...state,
                user:action.user
            }
        default:
            return state
    }
}

export default userReducer