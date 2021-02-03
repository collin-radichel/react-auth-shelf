const shelfReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_SHELF':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.shelf
  export default shelfReducer;