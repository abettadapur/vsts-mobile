import { Reducer, Action } from "redux";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import { AppNavigator } from "../../navigation/AppNavigator";

export const NavigationReducer: Reducer = createNavigationReducer(AppNavigator);