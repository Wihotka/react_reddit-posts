import React, { useState } from 'react';
import './main.global.css';
import { Layout } from './Layout';
import { Header } from './Header';
import { Content } from './Content';
import { CardsList } from './CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './context/tokenContext';
import { UserContextProvider } from './context/userContext';
import { PostsContextProvider } from './context/postsContext';
import { commentContext } from './context/commentContext';

function AppComponent() {
  const [commentValue, setCommentValue] = useState('');

  const [token] = useToken();

  const CommentProvider = commentContext.Provider;

  return (
    <CommentProvider value={{
      value: commentValue,
      onChange: setCommentValue,
    }}>
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
    </CommentProvider>
  );
}

export default AppComponent;
