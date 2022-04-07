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

function AppComponent() {
  const [token] = useToken();

  return (
    <tokenContext.Provider value={token}>
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
    </tokenContext.Provider>
  );
}

export default AppComponent;
