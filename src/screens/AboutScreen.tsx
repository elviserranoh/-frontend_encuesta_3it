import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AboutScreen</Text>
    </View>
  );
};

AboutScreen.options = {
  topBar: {
    title: {
      text: 'Acerca de',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default AboutScreen;
