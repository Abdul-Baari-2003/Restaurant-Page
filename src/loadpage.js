import createRestaurantPage from './restaurant';
import createTabs from './tabs';

function intializeLoad(){
    createTabs();
    createRestaurantPage();
}

export default intializeLoad;