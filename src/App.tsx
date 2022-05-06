import React from 'react';
import './main.global.css';
import { Layout } from './Layout';
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { PostsContextProvider } from './context/postsContext';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store';

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <PostsContextProvider>
          <Content>
            <CardsList />
          </Content>
        </PostsContextProvider>
      </Layout>
    </Provider>
  );
}

export default AppComponent;
