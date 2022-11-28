import { StatusBar } from "expo-status-bar";
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import ZodiacSigns from "./assets/zodiac.json";
import { getZodiacSign } from "./getZodiacSign";


const ResultScreen = ({route, navigation}) => {
    const {day, month} = route.params
    const result = getZodiacSign(Number(day), Number(month));
    const data = ZodiacSigns[result];

    return (
      <SafeAreaView style={styles.screenResult}>
        <StatusBar style="auto" />
        <ImageBackground
          resizeMode="cover"
          style={styles.imageResult}
          source={{ uri: data?.uri }}
        >
          <Text style={styles.textResult}>{data?.name}</Text>
          <Text style={styles.textResult}>{data?.element}</Text>
          <TouchableOpacity style={styles.btnBackResult} onPress={() => navigation.goBack()}>
            <Text>BACK</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  };

  export default ResultScreen;