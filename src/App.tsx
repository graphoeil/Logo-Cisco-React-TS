// Imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsTouch } from "./store/features/ciscoSlice";
import "./css/displayMain.css";
import LogoAnime from "./components/LogoAnime";

// Modernizr
const Modernizr = (window as any).Modernizr;

// Store interface
interface Store {
	cisco:{
		isTouch:boolean;
	};
};

// Component
const App = () => {

	// Store
	const { isTouch } = useSelector((store:Store) => { return store.cisco });

	// Dispatch
	const dispatch = useDispatch();

	// Is touch ?
	useEffect(() => {
		if (Modernizr.touchevents){
			dispatch(setIsTouch());
		}
		console.log(`Is touch ? ${ isTouch }`);
	},[dispatch, isTouch]);

	// Return
	return(
		<main>
			<LogoAnime/>
		</main>
	);

};

// Export
export default App;