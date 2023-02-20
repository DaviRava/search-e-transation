import React, { Component } from 'react';
import Inferior from './components/navigator.js'
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font"

export default class App extends Component {
  constructor(){
    super()
    this.state = {loadFont: false}
  }

  async carregarF (){
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    })
  }

  componentDidMount () {this.carregarF}

  render() {
    const{loadFont} = this.state
    if(loadFont) {
      return <Inferior/>
    }

    return null 

  }
}

