import WishList from './pages/WishList';
import Welcome from './pages/Welcome';
import MovieSearch from './pages/MovieSearch';
import HowToHost from './pages/HowToHost';
import CreateAPI from './pages/CreateAPI';

const MainMenu = [
    {
        title: 'Welcome',
        path: '/',
        component: Welcome,
        exact: true
    },
    {
        title: 'WishList',
        path: '/wishlist',
        component: WishList
    },
    {
        title: 'MovieSearch',
        path: '/moviesearch',
        component: MovieSearch
    },
    {
        title: 'CreateAPI',
        path: '/createapi',
        component: CreateAPI
    },
    {
        title: 'HowToHost',
        path: '/howtohost',
        component: HowToHost
    }

]

export default MainMenu;