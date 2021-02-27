import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Contacts from '../modules/Contacts';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
const AppNavigation = () => {
  const routes = [{name: 'contacts', component: Contacts}];
  return (
    <Stack.Navigator>
      {React.Children.toArray(
        routes.map((s) => (
          <Stack.Screen
            name={s.name}
            options={options}
            component={s.component}
          />
        )),
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
