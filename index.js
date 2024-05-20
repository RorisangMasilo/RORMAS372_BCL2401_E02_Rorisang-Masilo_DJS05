// UI Elements
let stateUI = document.getElementById("currentState");
let incrementButton = document.getElementById("incrementButton");
let decrementButton = document.getElementById("decrementButton");

// Initial state of tally app
const initialState = { count: 0 };

// Increment function
function increment(state) {
  return { count: state.count + 1 };
}

// decrement function
function decrement(state) {
  return { count: state.count - 1 };
}

// Function to create store
function createStore(initialState) {
  let state = initialState;
  let listeners = [];
// methods to dispatch an action to update the state
  return {
    getState: () => state,
    dispatch: (action) => {
      switch (action.type) {
        case "INCREMENT":
          state = increment(state);
          break;
        case "DECREMENT":
          state = decrement(state);
      }
    },
    // method to subscribe a listener to state changes
    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        listener = listeners.filter((1) => 1 !== listener);
      }
    },
  };
}
// function updateCounter
const store = createStore(initialState);

function updateCounter() {
    const state
}