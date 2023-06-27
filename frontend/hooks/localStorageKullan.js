import { useState } from "react";


const useLocalStorage = (initialValue,key) => {
    const [state,setState] = useState(

    () => {   
        
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
        else {
            localStorage.setItem(key,JSON.stringify(initialValue));
            return initialValue;
        }

});

const updateState = (value) => {
    localStorage.setItem(key,JSON.stringify(value));
    setState(value);
    return value;
}

return [state,updateState];
};

export default useLocalStorage;