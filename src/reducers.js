const initialState = {
    data:[],
};




export const feedSelected = (data) => ({
    type: 'feed',
    data: data
});



export const selection =(state=initialState,action)=>{
    console.log("ddddd",action.data);
    
    switch (action.type) {
  
          case 'feed':
              return {
                  ...state,
                  data: action.data
              };
          default:
              return state;
  }
  }