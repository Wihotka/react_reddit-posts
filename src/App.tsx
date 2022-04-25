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
import { createStore, Reducer } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  commentText: 'Hello Skillbox!',
}
const rootReducer: Reducer = (state = initialState, action) => {
  return state;
}
const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [commentValue, setCommentValue] = useState('');

  const [token] = useToken();

  const CommentProvider = commentContext.Provider;

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default AppComponent;
