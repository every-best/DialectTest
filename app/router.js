import React from 'react'
import {Route} from 'react-router'
import App from './components/app'
import About from './components/about'
import Index from './components/index'
import Category from './components/category'
import AddCategory from './components/addCategory'
import AddQuestion from './components/addQuestion'
import QuestionList from './components/questionList'
import Result from './components/result'

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