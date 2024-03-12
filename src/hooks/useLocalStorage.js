import {useEffect, useState} from "react";

export const useLocalStorage = (key,
                                defaultValue,
                                serialize = JSON.stringify,
                                deserialize = JSON.parse) => {
    const [state, setState] = useState(() => deserialize(window.localStorage.getItem(key)) ?? defaultValue)

    useEffect(() => {
        window.localStorage.setItem(key, serialize(state))
    }, [state, key,serialize,deserialize])

    return [state, setState]
}