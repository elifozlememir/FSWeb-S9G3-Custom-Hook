import { useState } from "react";
import useLocalStorage from "./localStorageKullan";

export default function useGeceModuAc(initialValue) {
    const [geceModu, setGeceModu] = useLocalStorage("geceModu",initialValue);


    return [geceModu, setGeceModu];
}