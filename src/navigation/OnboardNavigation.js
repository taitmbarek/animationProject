import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Home} from '../modules/Onboarding/Screens';
import Onboarding from '../modules/Onboarding';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};
const OnboardNavigation = () => {
  const routes = [
    {name: 'home', component: Home},
    {name: 'onBoarding', component: Onboarding},
  ];
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

export default OnboardNavigation;
