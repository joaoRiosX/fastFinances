import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './style.js';
import { BtnDisabled, ButtonReturn } from '../../../components/buttons';
import CheckBox from 'expo-checkbox';
import ImgTopReg from '../../../../assets/ImgTopReg.png';
import { TextPrincipal, TextPrincipal2, TextSecundario } from '../../../components/Text/index.js';

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
        <View>
          <Image
            source={ImgTopReg}
            style={styles.ImgTop}
          />
        </View>
        <View >
          <TextPrincipal text="Precisamos verificar alguns dados"/>
        </View>
        <View style={{bottom: 20}}>
          <TextPrincipal2 text="antes de criar sua conta."/>          
        </View>
        <View style={{bottom: 20}}>
          <TextSecundario text="Leva so alguns minutos"/>
        </View>
      <View style={{flexDirection: 'column', top: 107 }}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{borderRadius: 5, width: 15, height: 15}}
        />
        <Text style={{left: 24, bottom: 33}}>Aceito os<Text style={{color: '#53A0E7'}}> Termos e condiçoes</Text> e autorizo o uso{'\n'}
          de meus dados de acordo com a <Text style={{color: '#53A0E7'}}>Declaraçao{'\n'}
          de privacidade</Text>
        </Text>
        <BtnDisabled isDisabled={!isSelected} text="Avançar" onPress={TelaVerificaçao} />   
      </View>
    </View>
  );
}
