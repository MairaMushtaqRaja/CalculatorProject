import { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');

  const calculate = (title) => {
    if (title == 'C') {
      setResult('');
    } else if (title == "DL") {
      setResult(result.substring(0, result.length - 1));
    } else if (title == "=") {
      const answer = Number(eval(result).toFixed(3)).toString()
      setResult(answer);
    }
    else setResult(result + title);
  }
  const Btn = ({ title, type }) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      activeOpacity={0.7}
      style={{
        padding:"2%",
        borderRadius: 40,
        marginTop: "7%" ,
        marginLeft: "3.5%",
        rowGap: 12,
        elevation: 2,
        backgroundColor: getBtnColor(type),
        height:"17%",
        width: "20%"
      }}>
      <Text style={{
        fontSize: 28,
        color: getColor(type),
        textAlign: 'center',
        textAlignVertical: "center"
      }}>{title}</Text>
    </TouchableOpacity>
  )
  const getBtnColor=(type)=>{
    if(type=="right"){
      return darkTheme ? colors.dark3:colors.dark4;
    }
    else  if(type=="top"){
      return darkTheme ? colors.dark4:colors.dark5;
    }
    else{
      return darkTheme? colors.light1:colors.dark3;
    }
  }
  const getColor = (type) => {
    if (type == "top") {
      return darkTheme ? colors.dark2:colors.light1;
    } else if(type=="right"){
      return "#272B33";
    }else {
      return darkTheme? colors.dark2:colors.light1;
    }
  }
  const colors = {
    dark: "#22252D",
    dark1: "#292B36",
    dark2: "#272B33",
    dark3: "#ff8c00",
    dark4:"#00ffff",
    dark5:"#dc143c",
    light: "#FFF",
    light1: "#F1F1F1",
    light2: "#F7F7F7"
  }
  return (
  
    <View style={{
      flex:1,
      justifyContent:"flex-start",
      paddingVertical: "10%",
      paddingHorizontal: "12%",
      backgroundColor: darkTheme ? colors.dark : colors.light
    }}>
      <Switch value={darkTheme} onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={darkTheme ? colors.light : colors.dark}
        trackColor={{ true: colors.light2, false: colors.dark2 }}></Switch>
      <View>
        <Text style={{
          fontSize: 20,
          color: darkTheme ? colors.light : colors.dark,
          fontWeight: "bold",
          marginTop: "-12%"
        }}>Calculator</Text>

        <Text style={{
          fontSize: 40,
          color: darkTheme ? colors.light : colors.dark,
          width: '100%',
          textAlign: 'right',
          paddingRight: "8%",
          marginTop: "40%",
          paddingBottom: "9%"
        }}
        >{result}</Text>
      </View>
      <View style={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}>
        <Btn title="C" type="top"></Btn>
        <Btn title="DL" type="top"></Btn>
        <Btn title="/" type="top"></Btn>
        <Btn title="%" type="right"></Btn>
        <Btn title="7"></Btn>
        <Btn title="8"></Btn>
        <Btn title="9"></Btn>
        <Btn title="*" type="right"></Btn>
        <Btn title="4"></Btn>
        <Btn title="5"></Btn>
        <Btn title="6"></Btn>
        <Btn title="-" type="right"></Btn>
        <Btn title="1" ></Btn>
        <Btn title="2"></Btn>
        <Btn title="3"></Btn>
        <Btn title="+" type="right"></Btn>
        <Btn title="00"></Btn>
        <Btn title="0"></Btn>
        <Btn title="."></Btn>
        <Btn title="=" type="right"></Btn>
      </View>
    </View>

  );
}
const styles = StyleSheet.create({

});
