import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValues = {}, submitCallback) => {
    const [someValue, setSomeValue] = useLocalStorage("darkMode", initialValues);

    const 
}