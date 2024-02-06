// interface UserInfo {
//   userId: string;
//   name: string;
//   email: string;
//   password: string;
//   age: number | null | undefined;
//   website: string;
//   introduction: string;
// }

// interface UserState {
//   currentUser: UserInfo | null;
//   userList: UserInfo[];
// }

// const initialState: UserState = {
//   currentUser: null,
//   userList: [],
// };

// const userReducer = (state = initialState, action: any) => {
//   console.log(action.payload);
  
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         ...state,
//         currentUser: action.payload,
//       };
//     case 'LOGOUT':
//       return {
//         ...state,
//         currentUser: null,
//       };
//     case 'ADD_USER':
//       return {
//         ...state,
//         userList: [...state.userList, action.payload],
//       };
//     case 'UPDATE_USER':
//       const updatedList = state.userList.map((user) =>
//         user.userId === action.payload.userId ? action.payload : user
//       );
//       return {
//         ...state,
//         userList: updatedList,
//       };
//     case 'DELETE_USER':
//       const filteredList = state.userList.filter((user) => user.userId !== action.payload);
//       return {
//         ...state,
//         userList: filteredList,
//       };
//     case 'VIEW_USER':
//       // Logic for viewing a user goes here
//       // You may want to update the state with the user information for viewing
//       return state;
//     default:
//       return state;
//   }
// };

// export default userReducer;

import React, { Component } from 'react'

export default class userReducer extends Component {
  render() {
    return (
      <div>userReducer</div>
    )
  }
}
