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

  return {
    getState: () => state,
    dispatch: (action) => {
      switch (action.type) {
        case "INCREMENT":
          state = increment(state);
      }
    },
  };
}
