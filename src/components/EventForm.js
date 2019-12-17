import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
//import {formatDateTime} from '../../api';
import {formatDateTime} from '../../api';

export default class EventForm extends Component {
  state = {
    title: '',
    date: '',
  };
  handleChangeTitle = value => {
    this.setState({
      title: value,
    });
  };
  handleAddPress = () => {
    console.log('checking state value', this.state);
  };
  handleDatePress = () => {
    this.setState({
      showDatePicker: true,
    });
  };
  render() {
    return (
      <View>
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            placeholder="Enter title"
            spellCheck={false}
            value={this.state.title}
            onChangeText={this.handleChangeTitle}
          />
          <TextInput
            style={[styles.Text, styles.borderTop]}
            placeholder="Enter Date"
            spellCheck={false}
            value={formatDateTime(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
          />
        </View>

        <TouchableHighlight onPress={this.handleAddPress} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  text: {
    height: 40,
    // borderWidth: 1,
    margin: 0,
    marginLeft: 7,
    marginRight: 7,
    paddingLeft: 10,
  },
  borderTop: {
    borderColor: 'blue',
    borderTopWidth: 0.5,
  },
  button: {
    height: 50,
    backgroundColor: 'green',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
