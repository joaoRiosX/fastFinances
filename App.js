import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register/termos';
import * as Font from 'expo-font'
import PhotoVerification from './src/pages/Register/photoVerification';
import PhotoConfirmation from './src/pages/Register/PhotoConfirmation';
import TelaVincular from './src/pages/Register/Vincular';
import TelaInicial from './src/pages/Inicio';
import TelaCadastrar from './src/pages/Cadastrar';
const Stack = createNativeStackNavigator();



function Navigator(){
  return(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='PhotoVerification' component={PhotoVerification}/>
        <Stack.Screen name='PhotoConfirmation' component={PhotoConfirmation}/>
        <Stack.Screen name='TelaVincular' component={TelaVincular}/>
        <Stack.Screen name='TelaInicial' component={TelaInicial}/>
        <Stack.Screen name='TelaCadastrar' component={TelaCadastrar}/>
      </Stack.Navigator>
  )
}

export default function App(){
  const [appIsReady, setAppIsReady] = useState(false)
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Poppins: require('./assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
          'poppins-Bold': require('./assets/fonts/Poppins/Poppins-Bold.ttf')
        })
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }
    void prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }
  return(
    <NavigationContainer>
      <Navigator onLayoutRootView={onLayoutRootView} />
    </NavigationContainer>
  );
}