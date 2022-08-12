import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/Home/Home";
import { PlanetDetails } from "../screens/PlanetDetails/PlanetDetails";
import { Texts } from "../constants/texts";

const Stack = createNativeStackNavigator();

export const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: Texts.Home.title }}
        />
        <Stack.Screen
          name="PlanetDetails"
          component={PlanetDetails}
          options={({ route }) => ({ title: route?.params?.planet?.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
