import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen19194739Navigator from '../features/BlankScreen19194739/navigator';
import ArticleList194722Navigator from '../features/ArticleList194722/navigator';
import ArticleList194721Navigator from '../features/ArticleList194721/navigator';
import ArticleList194720Navigator from '../features/ArticleList194720/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen19194739: { screen: BlankScreen19194739Navigator },
ArticleList194722: { screen: ArticleList194722Navigator },
ArticleList194721: { screen: ArticleList194721Navigator },
ArticleList194720: { screen: ArticleList194720Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
