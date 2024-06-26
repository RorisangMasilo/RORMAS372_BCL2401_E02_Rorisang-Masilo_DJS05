import { createStore } from "redux";

let store = createStore(() => 0);
console.log(store.getState());

// UI Elements
if (typeof document !== "undefined") {
  let stateUI = document.getElementById("currentState");
  let incrementButton = document.getElementById("incrementButton");
  let decrementButton = document.getElementById("decrementButton");

  // Function to create store
  function createStore(initialState) {
    let state = initialState;
    let listeners = [];
    let store = Redux.createStore(0); // 0

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
  }

  // Define the reducer function
  function counterReducer(state = initialState, action) {}

  // Methods to dispatch an action to update the state
  return {
    getState: () => state,
    dispatch: (action) => {
      switch (action.type) {
        case "INCREMENT":
          return state + 1; // 1
        // break;
        case "DECREMENT":
          return state - 1; //
          break; // added break to avoid fall-through
        default:
          return state;
      }
      // Notify all listeners about the state change
      listeners.forEach((listener) => listener());
    },
    // Method to subscribe a listener to state changes
    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
  };
}

// Function to update counter
const store = createStore(initialState);

function updateCounter() {
  const state = store.getState();
  stateUI.textContent = state.count;
}
store.subscribe(updateCounter);

incrementButton.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});
decrementButton.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT" });
});
updateCounter();
