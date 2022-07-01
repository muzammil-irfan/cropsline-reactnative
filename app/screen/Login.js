import {Image, Text, TextInput, View,StyleSheet} from 'react-native';
import React from 'react';
import CustomInput from '../components/common/CustomInput';

export default function Login() {
  const [text, setText] = React.useState('text');
  return (
    <View>
      <View>
        <Image source={require('../assets/cropsline-logo.png')} />
        <Text>Cropsline</Text>
      </View>
      <View>
        <CustomInput
          placeholder="Phone/Email/Username"
          value={text}
          onChangeText={setText}
        />
        <TextInput  style={styles.input} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {zIndex: 2, borderWidth: 1, padding: 1},
});
