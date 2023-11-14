import React from 'react';
import {View, Image } from 'react-native';
import { styles } from './style.js';
import { Button1, ButtonReturn } from '../../../components/buttons';
import ImgTop from './assets/ImgTop.png'
import { TextPrincipal , TextPrincipal2, TextSecundario } from '../../../components/Text';

export default function PhotoConfirmation({navigation}){

    function TelaHome(){
        navigation.navigate('Home')
    }
    function Telavincular(){
        navigation.navigate('TelaVincular')
    }
return(

<View style={styles.Container}>
    <View style={styles.BtnVoltar}>
        <ButtonReturn onPress={TelaHome} />
    </View>
    
        <Image
            source={ImgTop}
            style={styles.ImgTop}
        />
    <View>
        <TextPrincipal text="sua foto está ótima" />
    </View>
    <View style={{bottom: 20}}>
     <TextPrincipal2 text="Quanta beleza"/>
    </View>
    <View style={{bottom: 20}}>
    <TextSecundario text="Falta só mais uma etapa para criar sua conta."/>
    </View>

    <View style={styles.BtnAva}>
        <Button1 text="Avançar" onPress={Telavincular}/>
    </View>
</View>


);
}