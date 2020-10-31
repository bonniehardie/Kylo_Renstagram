import { baseUrl } from "../../config";

export const TOKEN_KEY = "TOKEN_KEY";
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const removeToken = () => ({ type: REMOVE_TOKEN });
export const setToken = (token) => ({ type: SET_TOKEN, token });

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

export const login = (userName, password) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/users/token`, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userName, password }),
  });

  if (res.ok) {
    const { token } = await res.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    dispatch(setToken(token));
  }
};

// export const logout = () => async (dispatch, getState) => {
//   const { authentication: { token }} = getState();
//   const res = await fetch(`${baseUrl}/token`, {
//     method: "delete",
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   if (res.ok) {
//     window.localStorage.removeItem(TOKEN_KEY);
//     dispatch(removeToken());
//   }
// };
