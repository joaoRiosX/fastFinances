import React from'react';
import { TextInput } from 'react-native';
import {styles} from './style.js'

export  function Input1({placeholder}){
    return(
        <TextInput
            style={styles.input1}
            placeholder={placeholder}
            keyboardType='default'
        />
    );
}
export function Input2({placeholder}){
    return(
        <TextInput
            style={styles.input2}
            placeholder={placeholder}
            keyboardType='numeric'
        />
    );
}