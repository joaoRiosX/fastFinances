import react from 'react';
import {styles} from "./style.js";
import { TouchableOpacity,Text, View, Pressable, Image } from 'react-native';
import Logout from './assets/Logout.png'
import ProfilePhoto from './assets/ProfilePhoto.png'
import Bars from './assets/Bars.png'
import cadastro from './assets/cadastro.png'
import Pie from './assets/pie-chart.png'

export default function TelaInicial({navigation}) {
  function Listagem(){
    navigation.navigate('TelaInicial')
  }
  function Cadastrar(){
    navigation.navigate('TelaCadastrar')
  }
  function Resumo(){
    navigation.navigate('TelaResumo')
  }
  function Logout1(){
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <View style={styles.Blue}>
        <View style={styles.ViewLogout}>
          <Pressable onPress={Logout1}>
             <Image
                  source={Logout}
                  style={styles.Logout}
              />
          </Pressable>
        </View>
        <View style={styles.ViewOla}>
          <Image
            source={ProfilePhoto}
            style={styles.PPhoto}
          />
          <Text style={styles.Txtola}>Olá,{'\n'}
            Anderson</Text>
        </View>
      </View>
      <View style={styles.TrocaDeTela}>
        <TouchableOpacity style={{flexDirection: 'row', right: 10}}onPress={Listagem}>
          <Image
            source={Bars}
            style={{marginRight: 6}}
          />
          <Text style={{fontSize: 19, color: "#FF872C"}}>Listagem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection:'row'}} onPress={Cadastrar}>
          <Image
            source={cadastro}
            style={{marginRight: 6}}
          />
          <Text style={styles.TxtTroca}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', marginLeft: 10}} onPress={Resumo}>
          <Image
            source={Pie}
            style={{marginRight: 6}}
          />
          <Text style={styles.TxtTroca}>Resumo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


