import React, {useState, useEffect} from "react";

// const [numCookies, setNumCookies] = usePersistedState(1000, "num-cookies");

export default function usePersistedState(initialValue, keyName) {

    const [storedValue, setStoredValue] = useState(() => {
        const currentItem = localStorage.getItem(keyName)
        if(currentItem) {
            return JSON.parse(currentItem);
        } else {
            return initialValue;
        }
    });

    useEffect( () => {
        localStorage.setItem(keyName, JSON.stringify(storedValue));

    }, [storedValue, keyName]);



return [storedValue, setStoredValue] ;
}



