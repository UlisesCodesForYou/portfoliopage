import {useState} from "react";

export const useInput = (validateValue: any) => {
    const [enteredValue, setEnteredValue] = useState<string>("")
    const [isTouched, setIsTouched] = useState<boolean>(false)

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = (event: any) => {
        setEnteredValue(event.target.value)
    }
    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset

    }
}