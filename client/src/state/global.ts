// src/state/global.ts

// Define your initial global state
const initialState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
  // Add other global fields here as needed
};

// The reducer function
const globalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarCollapsed: !state.isSidebarCollapsed };
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    // Add more global actions here as needed
    default:
      return state;
  }
};

// Export as default
export default globalReducer;
