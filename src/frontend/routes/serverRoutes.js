import App from '../components/App';
import User from '../components/User';
import List from '../components/List';
import Home from '../components/Home';

const serverRoutes = [
  {
    path: '/',
    component: App,
    exact: true
  },
  {
    path:'/user',
    component: User,
    exact: true
  },
  {
    path:'/list',
    component: List,
    exact: true
  },
  {
    path:'/home',
    component: Home,
    exact: true
  },
]

export default serverRoutes;