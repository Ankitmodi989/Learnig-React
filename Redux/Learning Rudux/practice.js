let reduxState = {
    post :0,
    name: "Ankit Modi",
    age: 26,
}

function reducer(state,action){

        if(action.type =='post/increase')
        return {...state,post: reduxState.post + 1}
        else if(action.type =='post/decrease')
        return {...state,post: reduxState.post - 1}
        else if(action.type === 'post/increamentBy')
        return {...state,post: reduxState.post + action.pyload}
        else if(action.type === 'post/decreamentBy')
        return {...state,post: reduxState.post - action.pyload}
}

reduxState = reducer(reduxState,{type: 'post/increase'})
console.log(reduxState);
reduxState = reducer(reduxState,{type:'post/decrease'})
console.log(reduxState);
reduxState = reducer(reduxState,{type: 'post/increamentBy',pyload : 10});
console.log(reduxState);
reduxState = reducer(reduxState,{type:'post/decreamentBy',pyload:10});
console.log(reduxState)