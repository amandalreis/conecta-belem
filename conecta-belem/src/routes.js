import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Home } from './pages/Home'
import { Roteiro } from './pages/Roteiro'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

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