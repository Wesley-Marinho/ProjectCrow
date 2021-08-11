import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <LinearGradient colors={['#ffffff', '#3202D1',]}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          justifyContent: "space-around",
          alignContent: "space-around",
          paddingTop: 20,
          paddingLeft: 5,
        }}>

      </LinearGradient>
    );
  }
}

export default App;