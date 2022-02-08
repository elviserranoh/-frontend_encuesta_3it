import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useState, useEffect} from 'react';
import {getResults} from '../api/survey';

interface MusicalType {
  cnt: number;
  musicalStyle: string;
}

const SurveyAnswerStatisticsScreen = () => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getResults()
      .then(({data}) => setResult(data))
      .catch(e => console.log(e));
  }, []);

  const renderItem = ({cnt, musicalStyle}: MusicalType) => (
    <View style={styles.item}>
      <Text>{musicalStyle}</Text>
      <Text>{cnt}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultados Encuesta 3it</Text>
      <FlatList
        style={{marginTop: 30}}
        data={result}
        renderItem={({item}: ListRenderItemInfo<MusicalType>) =>
          renderItem(item)
        }
        keyExtractor={item => item.musicalStyle}
      />
    </View>
  );
};

SurveyAnswerStatisticsScreen.options = {
  topBar: {
    title: {
      text: 'Resultado',
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 5,
    borderColor: '#000',
  },
  title: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default SurveyAnswerStatisticsScreen;
