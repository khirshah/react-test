import AppLayout from 'common/components/AppLayout'
import ArticleList from 'pages/ArticleList'
import AuthorList from 'pages/AuthorList'
import Article from 'pages/Article'
import Author from 'pages/Author'

import * as Routes from 'constants/Routes'

export default store => ({
  component: AppLayout,
  childRoutes: [
    {
      path: '/',
      indexRoute: {
        onEnter: (nextState, replace) =>  replace(Routes.ARTICLES)
      }
    },

    ArticleList(store),
    Article(store),
    Author(store),
    AuthorList(store)
  ]
})
