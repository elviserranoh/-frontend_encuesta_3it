import {Navigation} from 'react-native-navigation';
import Menu from './src/components/menu';
import AboutScreen from './src/screens/AboutScreen';
import SurveyAnswerStatisticsScreen from './src/screens/SurveyAnswerStatisticsScreen';
import SurveyScreen from './src/screens/SurveyScreen';

Navigation.registerComponent('About', () => AboutScreen);
Navigation.registerComponent('Survey', () => SurveyScreen);
Navigation.registerComponent('Result', () => SurveyAnswerStatisticsScreen);
Navigation.registerComponent('Menu', () => Menu);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'sideMenu',
        left: {
          component: {
            name: 'Menu',
          },
        },
        center: {
          stack: {
            id: 'MyStack',
            children: [
              {
                component: {
                  name: 'Survey',
                },
              },
            ],
          },
        },
      },
    },
  });
});
