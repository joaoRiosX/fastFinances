import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './style.js';
import { Button1, ButtonReturn } from '../../../components/buttons';
import ImgTop from './assets/ImgTop.png'

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

    <View style={styles.viewTxtPrincipal}>
     <Text style={{ fontSize: 16, textAlign: 'center', color: '#363F5F', fontWeight: 'bold' }}>Sua foto está ótima.{'\n'}
        Quanta beleza</Text>
    </View>

    <View style={styles.viewTxtSecundario}>
        <Text style={{ textAlign: 'center', fontSize: 12, color: '#363F5F' }}>Falta só mais uma etapa para criar sua conta.</Text>
    </View>

    <View style={styles.BtnAva}>
        <Button1 text="Avançar" onPress={Telavincular}/>
    </View>
</View>


);
}