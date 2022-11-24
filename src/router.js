import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Main from './containers/Main/Main'
import { BrowserRouter } from 'react-router-dom'
import Activities from './containers/Activities/Activities'
import Actnew from './containers/Activities/Actnew'
import transition from './containers/Activities/transition'
import ArticleContainer from './containers/Articles'

import ActivitiesList from './containers/Activities/list'
import ArticlesList from './containers/Articles/list'
import NewsList from './containers/news/list'
import DakaList from './containers/dakashuo/list'

import { ARTICLES_CONSTANT } from './constants/articles'
import { ACTIVITIES_CONSTANT } from './constants/activities'
import { NEWS_CONSTANT } from './constants/news'

export default class RouterWrap extends Component {
  render() {

    return (
      <div id="router" style={{ overflowX: 'hidden' }}>
        <BrowserRouter>
          <Route path="/" component={Main} exact />
          <Route path="/dakashuo/list" component={DakaList} exact />
          <Route path="/activities/list" component={ActivitiesList} exact />
          <Route path="/articles/list" component={ArticlesList} exact />
          <Route path="/news/list" component={NewsList} exact />

          {
            ARTICLES_CONSTANT.map((art) => <Route key={art.key} path={art.link} component={ArticleContainer} exact />)
          }

          {
            ACTIVITIES_CONSTANT.filter((act) => !act.hidden).map((act) => <Route key={act.key} path={act.link} component={transition} exact />)
          }

          {/* {
            NEWS_CONSTANT.filter((news) => !news.hidden).map((news) => <Route key={news.key} path={news.link} component={ArticleContainer} exact />)
          } */}

          <Route path="/activities/feature-store-meetup-2022-04-10" component={Actnew} exact />
          <Route path="/news/pre-launch" component={Activities} exact />

        </BrowserRouter>
      </div>
    )
  }
}
