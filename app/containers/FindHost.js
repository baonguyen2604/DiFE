import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

import DatePicker from 'react-native-datepicker';

import FindHostStyles from '../styles/findHost_styles'
import PickerBox from '../components/locationPicker'

class FindHost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      date: '',
      time: '',
      sharePrice: '',
      note: '',
    };
  }

  _submitCreateTrip() {
    Alert.alert('Submit find host')
  }

  render() {
    let header = require('../../assets/find_host/header.png')
    let button = require('../../assets/find_host/submit.png')
    return (
      <View style = {{backgroundColor: 'white', flex: 10, alignItems: 'center', justifyContent: 'space-between'}}>
        <Image source = {header} style = {[FindHostStyles.header, {marginRight: 210}]} resizeMode = 'contain' />

        <PickerBox
          prompt = 'From'
          placeholderText = 'Enter your start point'
          onChangeText = {(origin) => this.setState({origin})}
        />

        <PickerBox
          prompt = 'To'
          placeholderText = 'Enter your destination'
          onChangeText = {(destination) => this.setState({destination})}
        />

        <View style = {FindHostStyles.pickerContainer}>
          <Text style = {FindHostStyles.pickerPrompt}>Date</Text>
          <DatePicker
            style = {FindHostStyles.pickerText}
            date = {this.state.date}
            placeholder = 'Choose your departure date'
            format = 'MM-DD-YYYY'
            confirmBtnText = 'Confirm'
            cancelBtnText = 'Cancel'
            onDateChange={(date) => {this.setState({date: date})}}
            showIcon = {false}
            customStyles = {{
              dateInput: { borderWidth: 0, alignItems: 'flex-start'}
            }}
          />
        </View>

        <View style = {FindHostStyles.pickerContainer}>
          <Text style = {FindHostStyles.pickerPrompt}>Time</Text>
          <DatePicker
            mode = 'time'
            style = {FindHostStyles.pickerText}
            date = {this.state.time}
            format = 'hh:mm A'
            placeholder = 'Choose your departure time'
            confirmBtnText = 'Confirm'
            cancelBtnText = 'Cancel'
            onDateChange={(time) => {this.setState({time: time})}}
            showIcon = {false}
            customStyles = {{dateInput: { borderWidth: 0, alignItems: 'flex-start'}}}
            minuteInterval = {15}
            is24hour = {false}
          />
        </View>

        <View style = {FindHostStyles.pickerContainer}>
          <Text style = {[FindHostStyles.pickerPrompt, {flex: 3}]}>Share Price</Text>
          <TextInput
            style = {[FindHostStyles.pickerText]}
            placeholder = 'Enter the amount you want to share'
            onChangeText = {(sharePrice) => this.setState({sharePrice})}
          />
        </View>

        <View style = {[FindHostStyles.pickerContainer, {flex: 3, alignItems: 'flex-start'}]}>
          <Text style = {[FindHostStyles.pickerPrompt, {marginTop: 10, flex: 3}]}>
            Special Note
          </Text>
          <TextInput
            style = {[FindHostStyles.pickerText, {marginTop: 5}]}
            placeholder = 'Additional notes for your host'
            onChangeText = {(note) => this.setState({note})}
            multiline = {true}
          />
        </View>

        <TouchableOpacity onPress = {this._submitCreateTrip}>
          <Image source = {button}/>
        </TouchableOpacity>

      </View>
        )
    };
}

export default FindHost;
