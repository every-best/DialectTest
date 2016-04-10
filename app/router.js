import React from 'react'
import {Route} from 'react-router'
import App from './components/App'
import About from './components/About'
import Index from './components/Index'
import Category from './components/Category'
import AddCategory from './components/AddCategory'
import AddQuestion from './components/AddQuestion'
import QuestionList from './components/QuestionList'
import Result from './components/Result'

export default(
    <Route component={App}>
          <Route path='/' component={Index}/>
          <Route path='/About' component={About}/>
          <Route path='/Category' component={Category}/>
          <Route path="/AddCategory" component={AddCategory}/>
          <Route path="/AddQuestion/:cid" component={AddQuestion}/>
          <Route path="/Result/:cid" component={Result}/>
          <Route path='/Question/:cid' component={QuestionList} />
    </Route>
);