import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './style.js';
import { Button1, ButtonReturn } from '../../../components/buttons';
import ImgTop from './assets/ImgTop.png'
import Avisos from './assets/avisos.png'

export default function PhotoVerification({navigation}){
function Confirmaçao(){
    navigation.navigate('PhotoConfirmation')
}
function TelaHome(){
    navigation.navigate('Home')
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
                <Text style={{ fontSize: 16, textAlign: 'center', color: '#363F5F', fontWeight: 'bold' }}>Vamos usar o reconhecimento {'\n'}
                    facial para confirmar que voce não{'\n'}
                    é um robô
                </Text>
            </View>

            <View style={styles.viewTxtSecundario}>
                <Text style={{ textAlign: 'center', fontSize: 12, color: '#363F5F' }}>
                    Pediremos que você use a câmera para{'\n'} 
                    mostrar seu rosto
                </Text>
            </View>
            <View>
                <Image
                    source={Avisos}
                    style={styles.ImgAvisos}
                />
            </View>
            <View style={styles.BtnAva}>
                <Button1 text="Avançar" onPress={Confirmaçao}/>
            </View>
        </View>

    );
}