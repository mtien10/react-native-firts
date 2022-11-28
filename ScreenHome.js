import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import styles from "./styles";




const ScreenHome = ({navigation}) => {
    const { width, height } = Dimensions.get("screen");
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Text style={styles.textWelcome}>
            WELCOME BẠN ĐẾN VỚI {"\n"} THẦY BÓI{" "}
            <Text style={styles.textNameApp}>TIÊN TRI</Text>
          </Text>
          <Image
            style={{ ...styles.imageHome, width: width, height: width }}
            resizeMode="center"
            source={require("./assets/zodilac.jpg")}
          />
          <Button color="white" title="START" onPress={() => navigation?.navigate('Input')} />
        </View>
      </SafeAreaView>
    );
  };

export default ScreenHome;