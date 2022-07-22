import React from "react";
import './main.global.css';
import {hot} from 'react-hot-loader/root';
import {Layout} from "./Layout";
import {Header} from "./Header";
import {Content} from "./Content";
import {CardsList} from "./CardsList";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/reducer";
import thunk from 'redux-thunk';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Post} from "./Post";
import {Text} from "./Text";
import { StoreContext } from 'storeon/react';
import {createStoreon, StoreonModule} from "storeon";
import {commentModule, ICommentState, ICommentStateEvents} from "./CommentFormContainer";

const storeStoreon = createStoreon<ICommentState, ICommentStateEvents>([commentModule])

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
    return (
        <StoreContext.Provider value={storeStoreon}>
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Header/>
                        <Content>
                            <Switch>
                                <Route exact path="/">
                                    <div style={{textAlign: 'center'}}>
                                        <Text size={20}>Для отображения контента, пожалуйста, авторизуйтесь.</Text>
                                    </div>
                                </Route>
                                <Route path="/posts/:id">
                                    <CardsList/>
                                    <Post/>
                                </Route>
                                <Route path="/posts">
                                    <CardsList/>
                                </Route>
                                <Route path="*">
                                    <div style={{textAlign: 'center'}}>
                                        <Text size={20}>404 ошибка</Text>
                                        <Text size={16}>страница не найдена</Text>
                                    </div>
                                </Route>
                            </Switch>
                        </Content>
                    </Layout>
                </BrowserRouter>
            </Provider>
        </StoreContext.Provider>
    )
}

export const App = hot(AppComponent)
