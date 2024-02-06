interface AuthState {
    isAuthenticated: boolean;
    // Add more authentication-related properties as needed
  }
  
  const initialAuthState: AuthState = {
    isAuthenticated: false,
    // Initialize other properties
  };
  
export { initialAuthState };
    export type { AuthState };
  