import React from 'react';
import {StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';
import {Navigation} from 'react-native-navigation';

const Menu = props => {
  const push = (stack: string) => {
    Navigation.push('MyStack', {
      component: {
        name: stack,
        options: {
          sideMenu: {
            left: {
              visible: false,
            },
          },
        },
      },
    });
  };

  return (
    <Drawer.Section style={styles.container}>
      <Drawer.Item label="Encuesta" onPress={() => push('Survey')} />
      <Drawer.Item label="Resultados" onPress={() => push('Result')} />
      <Drawer.Item label="Acerca de" onPress={() => push('About')} />
    </Drawer.Section>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: 200,
    backgroundColor: '#fff',
  },
});

export default Menu;
