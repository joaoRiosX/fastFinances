import React from 'react';
import {Text, View, Image } from 'react-native';
import {styles} from "./style.js";
import { ButtonApple, ButtonGoogle, ButtonReturn } from '../../../components/buttons';
import ImgTop from './assets/ImgTop.png'

export default function TelaVincular({navigation}) {
  
  // const Google = () => {
  //   // Função de manipulação para o botão do Google
  // };
 
  // const Apple = () => {
  //   // Função de manipulação para o botão da Apple
  // }
  function TelaInicial(){
    navigation.navigate('TelaInicial')
  }
  function TelaHome(){
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>

      <View style={styles.BtnVoltar}>
        <ButtonReturn onPress={TelaHome} />
      </View>

      <View>
        <Image
          source={ImgTop}
          style={styles.ImgTop}
        />
      </View>

      <View style={styles.TxtPrincipal}>
        <Text style={{ fontSize: 16, textAlign: 'center', color: '#363F5F', fontWeight: 'bold' }}>Vamos vincular suas{'\n'}
          informações em sua conta.
        </Text>
      </View>

      <View style={styles.TxtSecundario}>
        <Text style={{ fontSize: 12, textAlign: 'center', color: '#363F5F' }}>Sua foto de perfil será vinculada
          ao nosso app</Text>
      </View>

      <View style={{flexDirection: 'column', bottom: 50}}>
        <ButtonGoogle text="Entrar com google" onPress={TelaInicial} />
        <ButtonApple text="Entrar com Apple" onPress={TelaInicial} />
      </View>
    </View>
  );

}

 

