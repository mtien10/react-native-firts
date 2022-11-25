import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: "center"
  },
  textWelcome: {
    backgroundColor: 'white',
    textAlign: 'center',
    padding: 10,
  },
  textNameApp: {
    fontWeight: '700',
    color: 'red',
  },
  imageHome: {
    width: "100%", 
    marginVertical: 30
  }, 
  inputInformation: {
    flex: 1,
    backgroundColor: 'black',
  },
  btn: {
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginTop: 70,
  },
  btnBack: {
    color: 'white',
  },
  textEnterBirthday: {
    color: 'white',
    fontWeight: '700',
    fontSize: 30,
  },
  dateBirthday: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputDay: {
    backgroundColor: 'white',
    padding: 10,
  },
  inputMonth: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  inputYear: {
    backgroundColor: 'white',
    padding: 10,
    width: 65,
  },
  screenResult: {
    flex: 1,
  },
  imageResult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  textResult: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  btnBackResult: {
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginTop: 70,
  }
});
