import { AuthState, initialAuthState } from './authTypes';

const authReducer = (state: AuthState = initialAuthState, action: any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        // Add other authentication-related properties if needed
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        // Reset other authentication-related properties if needed
      };
    default:
      return state;
  }
};

export default authReducer;
