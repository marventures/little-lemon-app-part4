import * as React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function WelcomeScreen() {
  //declare variables
  const [firstName, onChangeFirstName] = React.useState('');
  const [lastName, onChangeLastName] = React.useState('');
  const [phoneNumber, onChangePhoneNumber] = React.useState('');
  const [message, onChangeMessage] = React.useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView indicatorStyle="white" keyboardDismissMode="on-drag">
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          onChangeText={onChangeFirstName}
          value={firstName}
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          onChangeText={onChangeLastName}
          value={lastName}
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={onChangePhoneNumber}
          value={phoneNumber}
          keyboardType="phone-pad"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.messageInput}
          placeholder="Message"
          onChangeText={onChangeMessage}
          value={message}
          placeholderTextColor="grey"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 35,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: 'white',
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: 'white',
  },
});
