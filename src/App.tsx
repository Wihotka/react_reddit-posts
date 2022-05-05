import React from 'react';
import './main.global.css';
import { Layout } from './Layout';
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import { PostsContextProvider } from './context/postsContext';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store';

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();
  const TokenProvider = tokenContext.Provider;

  return (
    <Provider store={store}>
      <TokenProvider value={token}>
        <UserContextProvider>
          <Layout>
            <Header />
            <PostsContextProvider>
              <Content>
                <CardsList />
              </Content>
            </PostsContextProvider>
          </Layout>
        </UserContextProvider>
      </TokenProvider>
    </Provider>
  );
}

export default AppComponent;
