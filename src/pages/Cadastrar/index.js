import react from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import {styles} from './style.js' 
import { Input1, Input2 } from "../../components/input/index.js"
import Bars from './assets/bars.png'
import cadastro from './assets/cadastro.png'
import Pie from '../Inicio/assets/pie-chart.png'
export default function TelaCadastrar({navigation}){
    function Listagem(){
        navigation.navigate('TelaInicial')
      }
      function Cadastrar(){
        navigation.navigate('TelaCadastrar')
      }
      function Resumo(){
        navigation.navigate('TelaResumo')
      }
    return(
        <View style={styles.container}>
            <View style={styles.TopBlue}>
                <Text style={styles.TxtCadastro}>cadastro</Text>
            </View>
            <View style={styles.ViewInput}>
                <Input1 placeholder="nome"/>
                <Input2 placeholder="Preço"/>
            </View>
            <View style={styles.TrocaDeTela}>
                <TouchableOpacity style={{flexDirection: 'row', right: 10}}onPress={Listagem}>
                    <Image
                        source={Bars}
                        style={{marginRight: 6}}
                    />
                    <Text style={styles.TxtTroca}>Listagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection:'row', }} onPress={Cadastrar}>
                    <Image
                        source={cadastro}
                        style={{marginRight: 6}}
                    />
                    <Text style={{fontSize: 19, color: "#FF872C"}}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', marginLeft: 10,}} onPress={Resumo}>
                    <Image
                        source={Pie}
                        style={{marginRight: 6}}
                    />
                    <Text style={styles.TxtTroca}>Resumo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}