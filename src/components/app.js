import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './stream/StreamList';
import StreamEdit from './stream/StreamEdit';
import StreamNew from './stream/StreamNew';
import StreamDelete from './stream/StreamDelete';
import StreamShow from './stream/StreamShow';
import Header from './header';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header/>
                <div>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamNew}/>
                    <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                    <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                    <Route path="/streams/show/:id" exact component={StreamShow}/>
                </div>
            </BrowserRouter>
        </div>
    )
}
export default App;