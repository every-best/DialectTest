import React from 'react'
import {Route} from 'react-router'
import App from './componets/App'
import About from './componets/About'
import Index from './componets/Index'
import Category from './componets/Category'
import Question from './componets/Question'

export default(
    <Route component={App}>
          <Route path='/' component={Index}/>
          <Route path='/About' component={About}/>
          <Route path='/Category' component={Category}/>
          <Route path='/:category/question' component={Question}>
          </Route>
    </Route>
);