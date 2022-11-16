import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image  } from 'react-native';
import { useState } from 'react';

const ScreenHome = ()=>
<View style={styles.container}>
      <View style={{
        flex:2,
        justifyContent: 'flex-end',
      }}>
        <Text style={styles.textWelcome}>
          WELCOME BẠN ĐẾN VỚI {"\n"} THẦY BÓI {" "}
          <Text style={styles.textNameApp}>
            TIÊN TRI
          </Text>
        </Text>
      </View>
        <StatusBar style="auto" />
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex:4
      }}>
        <Image
          style={styles.imageHome}
          source={require('./assets/zodilac.jpg')}
        />
      </View>
      <View style={{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex:3
      }}>   
        <Button
          color="white"
          title='START'
        />
        <HelloWord/>
      </View> 
    </View>

const ScreenEntry = ()=> <View><Text>Entry Screen</Text></View>

const HelloWord = ()=> 
<View 
    style={{flexDirection: 'row', 
            justifyContent:'center', 
            alignItems:'center'}}>
  <Text 
    style={{color:"white", flex:5, textAlign: 'center'}}>
    HelloWord
  </Text>
  <Image 
    style={{width:30, height:30, flex:5, resizeMode:'contain'}} 
    source={require('./assets/appikon.jpg')}
  />
</View>

export default function App() {
  const [screenName, setScreenName] = useState('Home')
  if screenName == 'Home'
  return (
    <ScreenHome/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  textWelcome: {
    backgroundColor: 'white',
    width: '100%',
    textAlign: 'center',
    padding: 5,
  },
  textNameApp: {
    fontWeight: '700',
    color: 'red',
  },
  imageHome: {
    resizeMode: 'center',
  }, 
});
