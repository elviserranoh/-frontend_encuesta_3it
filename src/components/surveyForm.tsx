import {Picker} from '@react-native-picker/picker';
import React, {useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Keyboard} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useForm} from '../hooks/useForm';
import {useState} from 'react';
import {getMusicalStyles} from '../api/survey';

interface Props {
  onLogin: ({}) => void;
}

const SurveyForm = ({onLogin}: Props) => {
  const [musicalList, setMusicalList] = useState([]);

  const {musicalStyle, mail, onChange} = useForm({
    musicalStyle: '',
    mail: '',
  });

  useEffect(() => {
    getMusicalStyles()
      .then(data => setMusicalList(data.musicalStyles))
      .catch(e => {
        console.log(e);
      });
  }, []);

  const onHandleLogin = () => {
    onLogin({
      musicalStyle,
      mail,
    });
    Keyboard.dismiss();
  };

  return (
    <View>
      <Text style={styles.label}>Estilo musical:</Text>
      <Picker
        selectedValue={musicalStyle}
        onValueChange={itemValue => onChange(itemValue, 'musicalStyle')}>
        {musicalList.map(e => (
          <Picker.Item key={e} label={e} value={e} />
        ))}
      </Picker>

      <TextInput
        style={{marginTop: 10}}
        mode="outlined"
        value={mail}
        onChangeText={value => onChange(value, 'mail')}
        label="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View style={styles.container}>
        <TouchableOpacity onPress={onHandleLogin}>
          <Text style={styles.button}>Responder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    width: 120,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
});

export default SurveyForm;
