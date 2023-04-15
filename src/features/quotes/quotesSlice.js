// Action Creators
// TODO: Create action creators as defined in tests

export function addQuote(payload){
  return {
    type: "quotes/add",
    payload: payload
  }
}

export function removeQuote(payload){
  return {
    type: "quotes/remove",
    payload: payload
  }
}

export function upvoteQuote(payload){
  return {
    type: "quotes/upvote",
    payload: payload
  }
}

export function downvoteQuote(payload){
  return {
    type: "quotes/downvote",
    payload: payload
  }
}
// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {

    case "quotes/add":
      return [...state, action.payload];
      
    case "quotes/remove":
      return state.filter(quote => quote.id !== action.payload);

    case "quotes/upvote":
      return state.map(quote => {
        if (quote.id === action.payload){
          return {...quote, votes: quote.votes += 1}
        } else {return quote}
      });

    case "quotes/downvote":
      return state.map(quote => {
        if (quote.id === action.payload && quote.votes > 0){
          return {...quote, votes: quote.votes -= 1}
        } else {return quote}
      });
      

    default: return state;
  }
}
