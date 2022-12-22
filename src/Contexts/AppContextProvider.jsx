import React from 'react';
import { combineComponents } from "../utils/combineComponents";
import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";

const providers = [
  LanguageProvider,
  ThemeProvider
]
export const AppContextProvider = combineComponents(...providers);
