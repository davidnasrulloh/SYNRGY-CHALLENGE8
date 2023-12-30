import { AUTH_ERROR, AuthAction, AuthState, LOGIN, LOGOUT } from "../../types";

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  error: null,
};


const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload);
      // localStorage.setItem("user", JSON.stringify(action.user));

      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        // user: action.user,
        error: null,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      // localStorage.removeItem("user");

      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: null,
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
