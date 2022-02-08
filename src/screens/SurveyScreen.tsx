import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {vote} from '../api/survey';
import SurveyForm from '../components/surveyForm';

class SurveyScreen extends React.Component {
  static options() {
    return {
      topBar: {
        title: {
          text: 'Encuesta',
        },
        leftButtons: {
          id: 'sideMenu',
          icon: require('./menuIcon.png'),
        },
      },
    };
  }

  constructor(props: any) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  onLogin(values: any) {
    const request = {
      survey: {
        ...values,
      },
    };

    console.log(request);

    vote(request)
      .then(data => {
        Alert.alert(
          'Votación exitosa',
          `Su voto ${data.mail} fue realizado exitosamente`,
          [
            {
              text: 'Ok',
              onPress: () =>
                Navigation.push('MyStack', {
                  component: {
                    name: 'Result',
                  },
                }),
            },
          ],
        );
      })
      .catch(e => Alert.alert('Error', e));
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <Text style={styles.title}>Encuesta 3it</Text>
          <SurveyForm onLogin={this.onLogin} />
        </View>
      </KeyboardAvoidingView>
    );
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'sideMenu') {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true,
          },
        },
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default SurveyScreen;
