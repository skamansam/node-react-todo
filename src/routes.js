import Layout from './components/Layout';
import Lists from './components/Lists';
import List from './components/List';
import ListEditor from './components/ListEditor';
import NotFoundPage from './components/NotFoundPage';

const routes = [
  { component: Layout,
    routes: [
      { path: '/',
        exact: true,
        component: Lists
      },
      { path: '/lists/:id/edit',
        component: ListEditor
      },
      { path: '/lists/:id',
        component: List
      },
      { path: '/lists',
        component: Lists
      },
      {
        path: '*',
        component: NotFoundPage
      }
    ]
  }
];

export default routes;
