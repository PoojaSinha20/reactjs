export var initialState={
    "userName":"Admin",
    "password":"123456"
}

// action={
//     "type":"VALUES",
//     userName:"",
//     password:""
// }
export function ValuesReducer(state,action){

    switch(action.type){
            case "VALUES":
                initialState={...initialState,userName:action.userName,password:action.password}
                return initialState;
            default:
                return initialState;
    }

}