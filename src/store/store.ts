// Imports
import { configureStore } from "@reduxjs/toolkit";
import ciscoReducer from "./features/ciscoSlice";

// Store
const store = configureStore({
	reducer:{
		cisco:ciscoReducer
	}
});

// Export
export default store;