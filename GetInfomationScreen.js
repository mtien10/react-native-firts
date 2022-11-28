import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableNativeFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import styles from "./styles";


const GetInfomationScreen = ({navigation}) => {
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
        navigation?.navigate("Result", {
            day: day,
            month: month
        })
      }
    };
  
    return (
      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.inputInformation}>
          <StatusBar style="auto" />
          <TouchableOpacity onPress={() => navigation.goBack()}>
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

  export default GetInfomationScreen;