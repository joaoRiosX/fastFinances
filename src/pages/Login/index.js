import React from 'react';
import {Text, View, Image } from 'react-native';
import {styles} from "./style.js";
import  ImgTopLog from "../../../assets/ImgTopLog.png"; 
import { ButtonApple, ButtonGoogle, ButtonReturn } from '../../components/buttons';

export default function Login({navigation}) {
  const Google = () => {
    // Função de manipulação para o botão do Google
  };
 
  const Apple = () => {
    // Função de manipulação para o botão da Apple
  }

  function TelaHome(){
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>

      <View style={styles.BtnVoltar}>
        <ButtonReturn onPress={TelaHome} />
      </View>

      <Image
        source={ImgTopLog}
        style={styles.ImgTop}
      />

      <View style={styles.TxtPrincipal}>
        <Text style={{ fontSize: 16, textAlign: 'center', color: '#363F5F' }}>Faça seu login com uma das contas abaixo!</Text>
      </View>

      <View style={styles.TxtSecundario}>
        <Text style={{ fontSize: 13, textAlign: 'center', color: '#363F5F' }}>Basta selecionar</Text>
      </View>

      <ButtonGoogle text="Entrar com google" onPress={Google} />
      <ButtonApple text="Entrar com Apple" onPress={Apple} />

      </View>
  );

}

 

