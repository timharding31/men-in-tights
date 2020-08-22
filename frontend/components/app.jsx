import React from "react";
import { Route, Switch } from 'react-router-dom';
import AuthRoute from '../util/auth_route_util';
import ContentRoute from '../util/content_route_util';
import SignupFormContainer from './auth/signup_form_container';
import LoginFormContainer from './auth/login_form_container';
import StockShowContainer from './stock/stock_show_container';
import StockSidebarContainer from './modules/stock_sidebar_container'
import WatchlistModuleContainer from './modules/watchlist_module_container';

import HeaderLogo from './header/logo';
import HeaderLinks from './header/links';
import HeaderAuthNav from './header/auth_nav';
import SearchBarContainer from './header/search_bar_container';
import HeaderAccountNav from './header/account_nav';

const Content = () => (
  <div className="application-content">
    <section className="content-main">
      <Route path="/stocks/:symbol" component={StockShowContainer} />
    </section>
    <aside className="content-sidebar">
      <Route path="/stocks/:symbol" component={StockSidebarContainer} />
      <Route path="/" component={WatchlistModuleContainer} />
    </aside>
  </div>
)

const Auth = () => (
  <div className="user-auth-content">
    <Route path="/signup" component={SignupFormContainer} />
    <Route path="/login" component={LoginFormContainer} />
    {/* <AuthRoute exact path="/" component={Spash} /> */}
  </div>
)

export default () => (
  <div id="application">
    <header className="application-header">
      <div className="header-content">
        <AuthRoute exact path="/login" component={HeaderLogo} />
        <AuthRoute exact path="/signup" component={HeaderLogo} />
        <AuthRoute exact path="/" component={HeaderLogo} />
        <ContentRoute path="/" component={HeaderLogo} />
        <AuthRoute exact path="/" component={HeaderLinks} />
        <AuthRoute exact path="/" component={HeaderAuthNav} />
        <ContentRoute path="/" component={SearchBarContainer} />
        <ContentRoute path="/" component={HeaderAccountNav} />
      </div>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={Auth} />
      <AuthRoute exact path="/signup" component={Auth} />
      <ContentRoute path="/" component={Content} />
      <AuthRoute exact path="/" component={Auth} />
    </Switch>
  </div>
);