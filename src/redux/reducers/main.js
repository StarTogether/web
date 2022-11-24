const initState = {telnum:1};

export default function mainReducer(preState=initState,action){
    const {type,data} = action
    switch(type){
        case '1':
            return data;
        default:
            return preState;
    }
}