import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './style.js';
import { BtnDisabled, ButtonReturn } from '../../../components/buttons';
import CheckBox from 'expo-checkbox';
import ImgTopReg from '../../../../assets/ImgTopReg.png';

export default function Register({navigation}) {
  const btnDisabled = useState(false);
  
  const [isSelected, setSelection] = useState(false);

  function TelaVerificaçao(){
    navigation.navigate('PhotoVerification')
}
  function TelaHome(){
    navigation.navigate('Home')
}

  return (
    <View style={styles.Container}>
        <View style={styles.BtnVoltar}>
            <ButtonReturn onPress={TelaHome} />
        </View>

        <Image
            source={ImgTopReg}
            style={styles.ImgTop}
        />

        <View style={styles.viewTxtPrincipal}>
          <Text style={{ fontSize: 16, textAlign: 'center', color: '#363F5F' }}>
            Precisamos verificar alguns dados
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center', color: '#363F5F' }}>
            antes de criar sua conta.
          </Text>
        </View>
        <View style={styles.viewTxtSecundario}>
          <Text style={{ textAlign: 'center', fontSize: 13, color: '#363F5F' }}>
            Leva só alguns minutos.
          </Text>
        </View>

      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{borderRadius: 5, width: 15, height: 15}}
        />
        <Text style={{left: 24, bottom: 33}}>Aceito os<Text style={{color: '#53A0E7'}}> Termos e condiçoes</Text> e autorizo o uso{'\n'}
           de meus dados de acordo com a <Text style={{color: '#53A0E7'}}>Declaraçao{'\n'}
           de privacidade</Text>
        </Text>
      </View>

      <View style={styles.BtnAva}>
        <BtnDisabled isDisabled={!isSelected} text="Avançar" onPress={TelaVerificaçao} />
      </View>
    </View>
  );
}
