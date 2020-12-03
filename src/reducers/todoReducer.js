// take in initial state and return the state
const todoReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state, //spreading array using es2015 -- the initial State is array
        {
          id: new Date(),
          text: action.data,
          completed: false
        }
      ];
    default:
      return [
        ...state
      ];
  }
}

export default todoReducer;