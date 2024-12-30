// import { configureStore,createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//     name:"todos",
//     initialState:{
//         items:[],
//         searchValue: "",
//     },
//     reducers: {
//         addItem: (state,action)=> {
//             state.items.push(action.payload);
//         },

//         removeItem: (state,action)=> {
//             state.items = state.items.filter((_,index) =>index !== action.payload);
//         },

//         editItem: (state,action)=> {
//             const {index,newValue} = action.payload;
//             state.items[index] = newValue;
//         },
        
//         setSearhValue: (state,action)=> {
//             state.searchValue = action.payload;
//         },
//     },
// });

// export const { addItem , removeItem, editItem , setSearchValue} = todoSlice.actions;

// export const store = configureStore({
//     reducer: {
//         todos: todoSlice.reducer,
//     },
// });

import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for the to-do list
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    searchedValue: '',
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
    editItem: (state, action) => {
      const { index, newValue } = action.payload;
      state.items[index] = newValue;
    },
    setSearchedValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

// Export actions
export const { addItem, removeItem, editItem, setSearchedValue } = todoSlice.actions;

// Create the Redux store
export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});


// import { configureStore,createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//     name: "todos",
//     initialState: {
//         items:[],
//         searchedValue:" ",
//     },

//     reducers: {
//         addItem: (state,action) =>{
//             state.value.push(action.payload);
//         },

//         removeItem:(state,action) =>{
//             state.items= state.items.filter((_,index)=>{index!==action.payload});
//         },

//         editItem: (state,action)=>{
//             const [index,newValue]= action.payload;
//             state.items[index]=newValue;
//         },

//         searchedValue: (state,action) =>{
//             state.searchValue = action.payload;
//         },
//     },
// });

// export const {addItem , removeItem , editItem , setSearchedValue} = todoSlice.actions;

// export const store = configureStore({
//     reducer: {
//         todos: todoSlice.reducer,
//     },
// });

