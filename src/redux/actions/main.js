


export const initState = (data) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({
                type:'1',
                data:1
            },100)
        })
    }
}