import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, Touchable, TouchableNativeFeedback, Keyboard  } from 'react-native';
import { useState } from 'react';

// const ScreenHome = ()=> {
// <View style={styles.container}>
//       <View style={{
//         flex:2,
//         justifyContent: 'flex-end',
//       }}>
//         <Text style={styles.textWelcome}>
//           WELCOME BẠN ĐẾN VỚI {"\n"} THẦY BÓI {" "}
//           <Text style={styles.textNameApp}>
//             TIÊN TRI
//           </Text>
//         </Text>
//       </View>
//         <StatusBar style="auto" />
//       <View style={{
//         alignItems: 'center',
//         justifyContent: 'center',
//         flex:4
//       }}>
//         <Image
//           style={styles.imageHome}
//           source={require('./assets/zodilac.jpg')}
//         />
//       </View>
//       <View style={{
//         alignItems: 'center',
//         justifyContent: 'space-evenly',
//         flex:3
//       }}>   
//         <Button
//           color="white"
//           title='START'
//         />
//       </View> 
//     </View>
// };


// export default function App() {
//   const [screenName, setScreenName] = useState('Home')
//   if (screenName == 'Home') {
//     return (
//       <ScreenHome/>
//     );
//   }
// };

const App = () => {
  const [slash, setSlash] = useState('');

  return(
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
    <View style={styles.inputInformation}>
        <View style={{
          width: '80%'
        }}>
          <TextInput style={styles.textInputBirtday} 
          keyboardType="numeric" 
          value={slash}
          maxLength="10"
          onChangeText = { (value)=> {
            console.log(slash,value )
            if ((value.length == 2 || value.length ==5) && value.length> slash.length) {  
              setSlash(value + '/');
            } else {
              setSlash(value)
              console.log('i')
            }
          }} 
          placeholder="ENTER BIRTHDAY" />
        </View>
        <View style={{
          width: '80%',
          paddingVertical: 15,
        }}>
          <Text style={styles.formatDay}>_yy_/_mm_/_dd_</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text>CHECK</Text>
        </TouchableOpacity>
    </View>
    </TouchableNativeFeedback>
  );
};

export default App;

// const HelloWord = ()=> 
// <View 
//     style={{flexDirection: 'row', 
//             justifyContent:'center', 
//             alignItems:'center'}}>
//   <Text 
//     style={{color:"white", flex:5, textAlign: 'center'}}>
//     HelloWordssss
//   </Text>
//   <Image 
//     style={{width:30, height:30, flex:5, resizeMode:'contain'}} 
//     source={require('./assets/appikon.jpg')}
//   />
// </View>





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
  btn: {
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'violet',
    marginTop: 70,
  },
  inputInformation: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  textInputBirtday: {
    backgroundColor: 'white',
    padding: 15,
  },
  formatDay: {
    backgroundColor: 'grey',
    padding: 15,
  },
});
