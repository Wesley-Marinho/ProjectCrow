import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import global from "../../style/global.js";
import style from './style.js';

let d4Result = 0
let d6Result = 0
let d8Result = 0
let d10Result = 0
let d12Result = 0
let d20Result = 0
let d100Result = 0

export default function App() {
  const [d4, rowD4] = useState(0);
  const [qtD4, QtD4] = useState(1);
  const [d6, rowD6] = useState(0);
  const [qtD6, QtD6] = useState(1);
  const [d8, rowD8] = useState(0);
  const [qtD8, QtD8] = useState(1);
  const [d10, rowD10] = useState(0);
  const [qtD10, QtD10] = useState(1);
  const [d12, rowD12] = useState(0);
  const [qtD12, QtD12] = useState(1);
  const [d20, rowD20] = useState(0);
  const [qtD20, QtD20] = useState(1);
  const [d100, rowD100] = useState(0);
  const [qtD100, QtD100] = useState(1);

  function calcD4() {
    if (qtD4 > 1) {
      for (let i = 0; i < qtD4; i++) {
        d4Result += Math.floor(Math.random() * 4) + 1
      }
    } else {
      d4Result = Math.floor(Math.random() * 4) + 1
    }
    rowD4(d4Result)
    d4Result = 0
  }

  function ajustD4() {
    if (qtD4 > 1) {
      QtD4((qtD4 - 1))
    } else {
      QtD4((1))
    }
  }

  function calcD6() {
    if (qtD6 > 1) {
      for (let i = 0; i < qtD6; i++) {
        d6Result += Math.floor(Math.random() * 6) + 1
      }
    } else {
      d6Result = Math.floor(Math.random() * 6) + 1
    }
    rowD6(d6Result)
    d6Result = 0
  }

  function ajustD6() {
    if (qtD6 > 1) {
      QtD6((qtD6 - 1))
    } else {
      QtD6((1))
    }
  }

  function calcD8() {
    if (qtD8 > 1) {
      for (let i = 0; i < qtD8; i++) {
        d8Result += Math.floor(Math.random() * 8) + 1
      }
    } else {
      d8Result = Math.floor(Math.random() * 8) + 1
    }
    rowD8(d8Result)
    d8Result = 0
  }

  function ajustD8() {
    if (qtD8 > 1) {
      QtD8((qtD8 - 1))
    } else {
      QtD8((1))
    }
  }

  function calcD10() {
    if (qtD10 > 1) {
      for (let i = 0; i < qtD10; i++) {
        d10Result += Math.floor(Math.random() * 10) + 1
      }
    } else {
      d10Result = Math.floor(Math.random() * 10) + 1
    }
    rowD10(d10Result)
    d10Result = 0
  }

  function ajustD10() {
    if (qtD10 > 1) {
      QtD10((qtD10 - 1))
    } else {
      QtD10((1))
    }
  }

  function calcD12() {
    if (qtD12 > 1) {
      for (let i = 0; i < qtD12; i++) {
        d12Result += Math.floor(Math.random() * 12) + 1
      }
    } else {
      d12Result = Math.floor(Math.random() * 12) + 1
    }
    rowD12(d12Result)
    d12Result = 0
  }

  function ajustD12() {
    if (qtD12 > 1) {
      QtD12((qtD12 - 1))
    } else {
      QtD12((1))
    }
  }

  function calcD20() {
    if (qtD20 > 1) {
      for (let i = 0; i < qtD20; i++) {
        d20Result += Math.floor(Math.random() * 20) + 1
      }
    } else {
      d20Result = Math.floor(Math.random() * 20) + 1
    }
    rowD20(d20Result)
    d20Result = 0
  }

  function ajustD20() {
    if (qtD20 > 1) {
      QtD20((qtD20 - 1))
    } else {
      QtD20((1))
    }
  }

  function calcD100() {
    if (qtD100 > 1) {
      for (let i = 0; i < qtD100; i++) {
        d100Result += Math.floor(Math.random() * 100) + 1
      }
    } else {
      d100Result = Math.floor(Math.random() * 100) + 1
    }
    rowD100(d100Result)
    d100Result = 0
  }

  function ajustD100() {
    if (qtD100 > 1) {
      QtD100((qtD100 - 1))
    } else {
      QtD100((1))
    }
  }


  return (
    <LinearGradient colors={['#ffffff', '#7A0400',]}
      style={global.LinearGradientList}>

      <View style={style.diceContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => QtD4((qtD4 + 1))}>
          <Text style={style.textButton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => ajustD4()}>
          <Text style={style.textButton}>-</Text>
        </TouchableOpacity>

        <Text style={style.text}>{qtD4}</Text>

        <TouchableOpacity
          style={style.button}
          onPress={() => calcD4()}>
          <Text style={style.textButton}>D4</Text>
        </TouchableOpacity>

        <Text style={style.text}>{d4}</Text>
      </View>

      <View style={style.diceContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => QtD6((qtD6 + 1))}>
          <Text style={style.textButton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => ajustD6()}>
          <Text style={style.textButton}>-</Text>
        </TouchableOpacity>

        <Text style={style.text}>{qtD6}</Text>

        <TouchableOpacity
          style={style.button}
          onPress={() => calcD6()}>
          <Text style={style.textButton}>D6</Text>
        </TouchableOpacity>

        <Text style={style.text}>{d6}</Text>
      </View>

      <View style={style.diceContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => QtD8((qtD8 + 1))}>
          <Text style={style.textButton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => ajustD8()}>
          <Text style={style.textButton}>-</Text>
        </TouchableOpacity>

        <Text style={style.text}>{qtD8}</Text>

        <TouchableOpacity
          style={style.button}
          onPress={() => calcD8()}>
          <Text style={style.textButton}>D8</Text>
        </TouchableOpacity>

        <Text style={style.text}>{d8}</Text>
      </View>

      <View style={style.diceContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => QtD10((qtD10 + 1))}>
          <Text style={style.textButton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => ajustD10()}>
          <Text style={style.textButton}>-</Text>
        </TouchableOpacity>

        <Text style={style.text}>{qtD10}</Text>

        <TouchableOpacity
          style={style.button}
          onPress={() => calcD10()}>
          <Text style={style.textButton}>D10</Text>
        </TouchableOpacity>

        <Text style={style.text}>{d10}</Text>
      </View>

      <View style={style.diceContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => QtD12((qtD12 + 1))}>
          <Text style={style.textButton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => ajustD12()}>
          <Text style={style.textButton}>-</Text>
        </TouchableOpacity>

        <Text style={style.text}>{qtD12}</Text>

        <TouchableOpacity
          style={style.button}
          onPress={() => calcD12()}>
          <Text style={style.textButton}>D12</Text>
        </TouchableOpacity>

        <Text style={style.text}>{d12}</Text>
      </View>

      <View style={style.diceContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => QtD20((qtD20 + 1))}>
          <Text style={style.textButton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => ajustD20()}>
          <Text style={style.textButton}>-</Text>
        </TouchableOpacity>

        <Text style={style.text}>{qtD20}</Text>

        <TouchableOpacity
          style={style.button}
          onPress={() => calcD20()}>
          <Text style={style.textButton}>D20</Text>
        </TouchableOpacity>

        <Text style={style.text}>{d20}</Text>
      </View>

      <View style={style.diceContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => QtD100((qtD100 + 1))}>
          <Text style={style.textButton}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.button}
          onPress={() => ajustD100()}>
          <Text style={style.textButton}>-</Text>
        </TouchableOpacity>

        <Text style={style.text}>{qtD100}</Text>

        <TouchableOpacity
          style={style.button}
          onPress={() => calcD100()}>
          <Text style={style.textButton}>D100</Text>
        </TouchableOpacity>

        <Text style={style.text}>{d100}</Text>
      </View>


    </LinearGradient>
  )
}

