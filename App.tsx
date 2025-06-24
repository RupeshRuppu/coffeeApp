import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PaymentScreen from './src/screens/PaymentScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import TabNavigators from './src/navigators/TabNavigators';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigators} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
