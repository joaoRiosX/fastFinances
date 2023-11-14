import React from 'react';
import {styles } from './styles';
import { Text, View } from 'react-native';

export function TextPrincipal({text}){
    return(
        <View style={styles.ViewTxtPrincipal}>
    <Text style={styles.textPrincipal}>{text}</Text>
        </View>
    );
};
export function TextPrincipal2({text}){
    return(
        <View style={styles.ViewTxtPrincipal}>
    <Text style={styles.textPrincipal}>{text}</Text>
        </View>
    );
};

export function TextSecundario({text}){
    return(
        <View style={styles.viewTxtSecundario}>
            <Text style={styles.textSecundario}>{text}</Text>
        </View>
    );
};