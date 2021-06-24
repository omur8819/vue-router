import Home from './components/Home';
import User from './components/user/User';

export const routes = [
    { path: '/', component : Home, name: 'homepage' },
    { path: '/user/:id', component: User, name: 'userpage' },
]