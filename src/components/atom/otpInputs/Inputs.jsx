import React, {useState} from "react";
import Styles from "./inputs.module.css";

//Our parent component
const OTPInputGroup = () => {
    //state to store all input boxes    
    const [inputValues, setInputValues] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: ''
        // Add more input values here
    });
    //this function updates the value of the state inputValues
    const handleInputChange = (inputId, value) => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [inputId]: value,
        }));
    };
    
    //return child component
        return (
        <>
            <div id='OTPInputGroup' className={Styles.digitGroup} data-autosubmit="true">
                <OTPInput
                    id="input1"
                    value={inputValues.input1}
                    onValueChange={handleInputChange}
                    previousId={null}
                    nextId="input2"
                />
                <OTPInput
                    id="input2"
                    value={inputValues.input2}
                    onValueChange={handleInputChange}
                    previousId="input1"
                    nextId="input3"
                />
                <OTPInput
                    id="input3"
                    value={inputValues.input3}
                    onValueChange={handleInputChange}
                    previousId="input2"
                    nextId="input4"
                />
                <OTPInput
                    id="input4"
                    value={inputValues.input4}
                    onValueChange={handleInputChange}
                    previousId="input3"
                />
            </div>
        </>
    );
}

//Our child component
const OTPInput = ({ id, previousId, nextId, value, onValueChange}) => {
    //This callback function only runs when a key is released
    const handleKeyUp = (e) => {
        //check if key is backspace or arrowleft
        if (e.keyCode === 8 || e.keyCode === 37) {
            //find the previous element
            const prev = document.getElementById(previousId);
            if (prev) {
                //select the previous element
                prev.select();
            }
        } else if (
            (e.keyCode >= 48 && e.keyCode <= 57) || //check if key is numeric keys 0 to 9
            (e.keyCode >= 65 && e.keyCode <= 90) || //check if key is alphabetical keys A to Z
            (e.keyCode >= 96 && e.keyCode <= 105) || //check if key is numeric keypad keys 0 to 9
            e.keyCode === 39 //check if key is right arrow key
        ) {
            //find the next element
            const next = document.getElementById(nextId);
            if (next) {
                //select the next element
                next.select();
            } else {
                //check if inputGroup has autoSubmit enabled
                const inputGroup = document.getElementById('OTPInputGroup');
                if (inputGroup && inputGroup.dataset['autosubmit']) {
                    //submit the form
                    
                }
            }
        }
    }
    return (
        <input
            id={id}
            name={id}
            type="text"
            className={Styles.DigitInput}
            value={value}
            maxLength="1"
            onChange={(e) => onValueChange(id, e.target.value)}
            onKeyUp={handleKeyUp}
        />
    );
};

export default OTPInputGroup;