const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
  console.log(action.type);
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    }
     if (action.type === 'addValue') {
        return {
            counter: state.counter + action.value
        }
    }
     if (action.type === 'subValue') {
        return {
            counter: state.counter - action.value
        }
    }
   return state;
};

export default reducer;