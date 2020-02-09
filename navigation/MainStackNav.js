import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Goals from "../src/screens/GoalsScreen";
import GoalDetails from "../src/screens/GoalDetailScreen";
import Messages from "../src/screens/MessagesScreen";
import New from "../src/screens/NewGoalScreen";
import Profile from "../src/screens/ProfilesScreen";

const MainStackNav = createStackNavigator({
  Home: {
    screen: Goals,
    navigationOptions: {
      headerTitle: "Goals"
    }
  },
  GoalDetails: {
    screen: GoalDetails,
    navigationOptions: {
      headerTitle: "GoalTitle"
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      headerTitle: "Recipient"
    }
  },
  New: {
    screen: New,
    navigationOptions: {
      headerTitle: "New Goal"
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "GoalTitle"
    }
  }
});

export default createAppContainer(MainStackNav);
