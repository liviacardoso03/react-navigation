import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

export default props => (
  <SafeAreaView style={{flex: 1}}>
    <SafeAreaView
      style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      {props.avancar ? (
        <Button
          title="Avançar"
          onPress={() => {
            props.navigation.navigate(props.avancar);
          }}
        />
      ) : (
        false
      )}

      {props.voltar ? (
        <Button
          title="Voltar"
          onPress={() => {
            props.navigation.goBack();
          }}
        />
      ) : (
        false
      )}
    </SafeAreaView>

    <SafeAreaView style={{flex: 1}}>{props.children}</SafeAreaView>
  </SafeAreaView>
);
