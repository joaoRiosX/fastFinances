import React from 'react';
import { Text, TouchableOpacity, StatusBar, View, Image, Pressable } from 'react-native';
import Return from "../../../assets/Return.png";
import google from "../../../assets/google.png";
import apple from "../../../assets/apple.png";
import {styles} from './style';


export function ButtonGoogle({ text, onPress }) {
  return (
    <View style={styles.Btngoogle}>
        <TouchableOpacity onPress = {onPress}>
          <Image
            source={google}
            style={styles.ImgGoogle}
          />
          <Text style={styles.BtnGoogleText}>{text}</Text>
          </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
  );
};

export function ButtonApple({ text, onPress }) {
    return (
      <View style={styles.BtnApple}>
          <TouchableOpacity onPress = {onPress}>
            <Image
              source={apple}
              style={styles.ImgAplle}
            />
            <Text style={styles.BtnAppleText}>{text}</Text>
            </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
    );
  };

  export function Button1({ text, onPress }) {
    return (
      <View style={styles.Btn1}>
       <TouchableOpacity onPress = {onPress}>
         <Text style={styles.TxtBtn1}>{text}</Text>
          </TouchableOpacity>
       <StatusBar style="auto" />
      </View>
    );
   
  };
  export function Button2({ text, onPress}){
    return(
      <View>
        <View style={styles.Btn2}>
          <TouchableOpacity onPress = {onPress}>
            <Text style={styles.TxtBtn2}>{text}</Text>
            </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      </View>
    );
  };

  export function ButtonReturn({ onPress }) {
    return (
      <View style={styles.BtnR}>
       <TouchableOpacity onPress = {onPress}>
          <Image
            source={Return}
            style={styles.ImgReturn}
          />
        </TouchableOpacity>
       <StatusBar style="auto" />
      </View>
    );
  };
  export function BtnDisabled({ text, onPress, isDisabled }) {
    return (
      <View >
       <Pressable style={isDisabled ?styles.BtnDisabled: styles.BtnEnabled}  
        disabled ={isDisabled}  onPress = {onPress} >
           <Text style={isDisabled ?styles.TxtBtnDisabled: styles.TxtBtnEnabled}>{text}</Text>
        </Pressable>
       <StatusBar style="auto" />
      </View>
    );
   
  };