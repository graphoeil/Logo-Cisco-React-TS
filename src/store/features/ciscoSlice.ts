// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	// Is touch ?
	isTouch:false
};

// Slice
const ciscoSlice = createSlice({
	name:'cisco',
	initialState,
	reducers:{
		// Is touch ?
		setIsTouch:(state) => {
			state.isTouch = true;
		}
	}
});

// Interface
export interface CiscoSliceModel {
	cisco:{
		isTouch:boolean;
	};
};

// Actions exports
export const { setIsTouch } = ciscoSlice.actions;

// Reducer export
export default ciscoSlice.reducer;