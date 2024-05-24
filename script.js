if (typeof document !== "undefined") {
  // UI Elements
  let stateUI = document.getElementById("currentState");
  let incrementButton = document.getElementById("incrementButton");
  let decrementButton = document.getElementById("decrementButton");
}
// Initial state of tally app
const initialState = { count: 0 };

// Increment function
function increment(state) {
  return { count: state.count + 1 };
}

// Decrement function
function decrement(state) {
  return { count: state.count - 1 };
}

// Function to create store
function createStore(initialState) {
  let state = initialState;
  let listeners = [];
  // Methods to dispatch an action to update the state
  return {
    getState: () => state,
    dispatch: (action) => {
      switch (action.type) {
        case "INCREMENT":
          state = increment(state);
          break;
        case "DECREMENT":
          state = decrement(state);
          break; // Added break to avoid fall-through
        default:
          break;
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
