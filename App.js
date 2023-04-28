import { View } from 'react-native';
import SeuPerfilScreen from './src/screens/SeuPefilScreen';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigators/MainStack';

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <MainStack />
        <SeuPerfilScreen />
      </NavigationContainer>
    </View>
  );
}
