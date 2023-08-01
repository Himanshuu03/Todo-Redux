import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    element :[],
    checked :[]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addDataToElement:(state,action)=>{
            state.element.push(action.payload);
        },
        addDataToChecked:(state,action)=>{
            state.checked.push(action.payload);
        },
        removeDataFromChecked:(state,action)=>{
            const updateData  = state.checked.filter((e)=> e !== action.payload);
            state.checked = updateData;
        },
        removeDataFromElemet:(state,action)=>{
            const updateData = state.element.filter((e,index)=> index !== action.payload);
            state.element = updateData;
        }
    }
})

export const {addDataToElement,addDataToChecked,removeDataFromChecked,removeDataFromElemet} = todoSlice.actions;

export {todoSlice};