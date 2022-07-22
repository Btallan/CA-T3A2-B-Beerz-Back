import { createContext,useContext } from "react";

// This is the component which will wrap all of our components, 
export const StateContext = createContext();

// useGlobalState hook:
// Allow us to get the global state in any component,
export const useGlobalState = () => useContext(StateContext)

// Must define this file exactly as it is, as the imports are packages, and the names are conventions
