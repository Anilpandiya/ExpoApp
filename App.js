import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [title, setTitle] = React.useState("START");
  const [timer, setTimer] = React.useState();

  const handleTimer = () => {
    const getTitle = () => {
      switch (title) {
        case "START":
          return "PAUSE";
        case "PAUSE":
          return "RESUME";
        case "RESUME":
          return "PAUSE";
      }
    };
    setTitle(() => getTitle());
    setTimer(
      (title === "START" || title === "RESUME") &&
        setInterval(() => setCount((count) => count + 10), 10)
    );
    title === "PAUSE" && clearInterval(timer);
  };

  const handleReset = () => {
    setCount(0);
    setTitle("START");
    clearInterval(timer);
    setTimer(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        <Text>{("0" + Math.floor((count / 60000) % 60)).slice(-2)}</Text>:
        <Text>{("0" + Math.floor((count / 1000) % 60)).slice(-2)}</Text>:
        <Text>{("0" + ((count / 10) % 1000)).slice(-2)}</Text>
      </Text>
      <View style={styles.title}>
        <View style={styles.titleBtn}>
          <Button title={title} color="#000" onPress={handleTimer} />
        </View>
        <View style={styles.titleBtn}>
          <Button title="RESET" color="#000" onPress={handleReset} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEADB",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    width: 300,
    height: 300,
    lineHeight: 330,
    borderRadius: 150,
    fontSize: 70,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "lightseagreen",
  },
  title: {
    flexDirection: "row",
  },
  titleBtn: {
    margin: 50,
    borderRadius: 30,
    backgroundColor: "black",
    width: 80,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
});
