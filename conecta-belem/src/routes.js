import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from './pages/Inicio'
import { Home } from './pages/Home'
import { Roteiro } from './pages/Roteiro'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function MainStack() {
    return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen
        name="Inicio"
        component={Inicio}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Routes} />
    </Stack.Navigator>
    )
  }

export function Routes() {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused) {
                            return <Ionicons size={size} color="green" name="home"/>
                        }

                        return <Ionicons size={size} color={color} name="home-outline"/>
                    }
                }}
            />
            <Tab.Screen
                name="roteiro"
                component={Roteiro}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused) {
                            return <Ionicons size={size} color="green" name="calendar"/>
                        }

                        return <Ionicons size={size} color={color} name="calendar-outline"/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}