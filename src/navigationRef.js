import { NavigationActions } from 'react-navigation';

// this file is created to make non react files/components to get access to navigation
// for eg in AuthContext we dont have react component so we use these exports

let navigator;

export const setNavigator = (nav) => {
	navigator = nav;
};

export const navigate = (routeName, params) => {
	navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params
		})
	);
};
