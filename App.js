import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  TouchableNativeFeedback,
  Keyboard,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useState } from "react";
import styles from "./styles";
import ZodiacSigns from "./assets/zodiac.json";
import { getZodiacSign } from "./getZodiacSign";

const ScreenHome = (props) => {
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
        <Button color="white" title="START" onPress={props.onStart} />
      </View>
    </SafeAreaView>
  );
};

const GetInfomationScreen = (props) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [isValidated, setIsValidated] = useState("");

  const validate = () => {
    const monthIndex = Number(month) - 1;
    const dateOfMonth = dates[monthIndex];
    if (day > dateOfMonth || day === 0) {
      return false;
    } else if (year.length < 4) {
      return false;
    } else if (!dateOfMonth) {
      return false;
    } else if (day === "" || month === "" || year === "") {
      return false;
    }
    return true;
  };

  const onCheck = () => {
    const check = validate();
    setIsValidated(check);
    if (check) {
      const result = getZodiacSign(Number(day), Number(month));

      props.onSubmit(result);
    }
  };

  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.inputInformation}>
        <StatusBar style="auto" />
        <TouchableOpacity onPress={props.goBack}>
          <Text style={styles.btnBack}>Back</Text>
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "red" }}>
            {isValidated === false && `INVALID DATE`}
          </Text>
          <Text style={styles.textEnterBirthday}>ENTER BIRTHDAY</Text>
          <View style={styles.dateBirthday}>
            <TextInput
              style={styles.inputDay}
              placeholder="Day"
              keyboardType="numeric"
              maxLength="2"
              value={day}
              onChangeText={setDay}
            />
            <TextInput
              style={styles.inputMonth}
              placeholder="Month"
              keyboardType="numeric"
              maxLength="2"
              value={month}
              onChangeText={setMonth}
            />
            <TextInput
              style={styles.inputYear}
              placeholder="Year"
              keyboardType="numeric"
              maxLength="4"
              value={year}
              onChangeText={setYear}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={onCheck}>
            <Text>CHECK</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableNativeFeedback>
  );
};

const ResultScreen = (props) => {
  const data = props?.data;
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
        <TouchableOpacity style={styles.btnBackResult} onPress={props.goBack}>
          <Text>BACK</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const App = () => {
  const [screenName, setScreenName] = useState("HOME");
  const [zodiacResult, setZodiacResult] = useState("");

  switch (screenName) {
    case "GET_INFO":
      return (
        <GetInfomationScreen
          goBack={() => setScreenName("HOME")}
          onSubmit={(result) => {
            setZodiacResult(result);
            setScreenName("RESULT");
          }}
        />
      );
    case "RESULT":
      return (
        <ResultScreen
          goBack={() => setScreenName("GET_INFO")}
          data={ZodiacSigns[zodiacResult]}
        />
      );
    default:
      return <ScreenHome onStart={() => setScreenName("GET_INFO")} />;
  }
};
export default App;
