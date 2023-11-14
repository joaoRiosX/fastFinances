import React from 'react';
import ImgCentral from '../../../assets/ImgCentral.png';
import Cifrao from '../../../assets/Cifrao.png';
import { Button1, Button2 } from '../../components/buttons';
import {styles} from "./style"
import { Image, StatusBar, Text, View} from 'react-native';

export default function Home({navigation}){

function TelaLogin(){
    navigation.navigate('Login')
}
function TelaRegister(){
    navigation.navigate('Register')
}

return(

    <View style={styles.container}>
        <View>
            <Image
             source={Cifrao}
              style={{bottom: 60}}
            />
        </View>
        <View >
         <Text style={styles.TxtFast}>Fast</Text>
         <Text style= {styles.TxtFinace}>Finances</Text>
        </View>

        <View>
            <Image
              source={ImgCentral}
              style={styles.ImgCentral}
            />
        </View>

        <View >
            <Text style={styles.txtBottom}>
              Controle suas 
            </Text>
            
            <Text style={styles.TxtBottom1}>
              finanças de forma
            </Text>
            
            <Text style={styles.TxtBottom2}>  
              muito simples
            </Text>
        </View>
      <View>
         <Button1 text="Login" onPress={TelaLogin}/>
      </View>
      <View>
        <Button2 text="cadastrar" onPress={TelaRegister}/> 
      </View>
    </View>

);
}