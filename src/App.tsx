import React from 'react';
import './main.global.css';
import { Layout } from './Layout';
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/reducer';
import thunk from 'redux-thunk';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

function AppComponent() {
  return (
    <div>FFFFFFFFFFF</div>
    // <Provider store={store}>
    //   <BrowserRouter>
    //     <Switch>
    //       <Route path="/posts">
    //         <Layout>
    //           <Header />
    //           <Content>
    //             <CardsList />
    //           </Content>
    //         </Layout>
    //       </Route>
    //       <Redirect exact from="/" to="/posts" />
    //       <Redirect from="/auth" to="/posts" />
    //       <Route component={NotFoundPage} />
    //     </Switch>
    //   </BrowserRouter>
    // </Provider>
  );
}

export default AppComponent;
