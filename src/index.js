import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ScrollToTop from './app/common/utils/ScrollToTop'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'semantic-ui-css/semantic.min.css'
import ReduxToastr from 'react-redux-toastr'
import './index.css'
import App from './app/layout/App'
import * as serviceWorker from './serviceWorker'
import { configureStore } from './app/store/configureStore'
import { loadCommunities } from './features/community/communityActions'
import { loadTop, loadRecent, loadUpcoming } from './features/home/homeActions'
import { fetchFavorites } from './features/favorites/favoriteActions'


const store = configureStore()
store.dispatch(loadCommunities())
store.dispatch(loadTop())
store.dispatch(loadRecent())
store.dispatch(loadUpcoming())
store.dispatch(fetchFavorites())

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <ReduxToastr
        position='bottom-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
      />
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
