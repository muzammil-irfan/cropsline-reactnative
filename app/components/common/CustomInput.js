import React from 'react';
import {View, TextInput} from 'react-native';

export default function CustomInput({style, onChangeText, value,placeholder}) {
  return (
    <View>
      <TextInput onChangeText={onChangeText} style={style} value={value} placeholder={placeholder} />
    </View>
  );
}
