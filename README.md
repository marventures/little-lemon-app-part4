# React Native (Meta) Exercise

This is a solution to the React Native Exercise by Meta.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:  

- Create a React Native App using Expo
- Use View, Text, TextInput, ScrollView, KeyboardAvoiding View Components
- Create a Header Component
- Create a Footer Component  
- Create a Welcome Screen Component  
- Configure TextInput component on the Welcome Screen  
- Store user input within TextInput as local state by using useState Hook
- Set behaviors for the virtual keyboard
- Set keyboard types (phone-pad)
- Prevent the keyboard from obstructing the view
- Update Styles of Components to match Scenario
- Extract All Styles to StyleSheet API 
- Render Components to the App Component

### Screenshot

![image](https://user-images.githubusercontent.com/108392678/201511433-b1ce993f-d293-4a1e-8b56-f25894176d9e.png)
![image](https://user-images.githubusercontent.com/108392678/201511493-358f4db4-939d-4456-b05a-ab2be59fd149.png)

### Links

- Solution URL: [Code](https://github.com/marvedventures/little-lemon-app-part4)

## My process

### Built with
- [React Native](https://reactnative.dev/docs/environment-setup) - React Native using Expo Go
- [SectionList](https://reactnative.dev/docs/sectionlist) - For lazy rendering menu items
- [StyleSheet](https://reactnative.dev/docs/stylesheet) - For styles

### What I learned

Creating React Native components, KeyboardAvoidingView, TextInput, Views, Text and ScrollView Components.  
Accepting user input through TextInput Component.  
Preventing the virtual keyboard from obstructing the view based on a platform using KeyboardAvoidingView and Platform API.  
Disappear the keyboard on scroll by using the keyboardDismissMode set to 'on-drag' on ScrollView.  
Using StyleSheet API to style a React Native App.

Here is a code snippet: 
```jsx
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
        ...
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

```

### Useful resources

- [React Native Docs (StyleSheet) ](https://reactnative.dev/docs/stylesheet) - This helped me for all the neccessary React Native styles. I really liked their documentation and will use it going forward.  
- [React Native Docs (TextInput) ](https://reactnative.dev/docs/textinput) - This helped me for accepting user inputs. 
- [React Native Docs (KeyboardAvoidingView) ](https://reactnative.dev/docs/keyboardavoidingview) - This helped me for preventing obstruction of keyboard from the view. 

## Author

- Website - [Marvin Morales Pacis](https://marvin-morales-pacis.vercel.app/)
- LinkedIn - [@marvedventures](https://www.linkedin.com/in/marvedventures/)
- Twitter - [@marvedventures](https://www.twitter.com/marvedventures)
