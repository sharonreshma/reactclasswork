import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from './ThemeReducer';
export const Storee=configureStore({theme: ThemeReducer})