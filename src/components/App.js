import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Home from './Home'
import Plans from './Plans'
import About from './About'
import Contact from './Contact'
import ContactList from './ContactList'
import Footer from './Footer'

import {Provider} from 'react-redux'
import store from '../store'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="container">
                    <Header />
                    <Navigation />
                    <>
                        <Route path='/' exact render={(props) => (
                            <>
                                <Home />
                            </>
                        )} />
                        <Route path='/plans' component={Plans} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/contact-list' component={ContactList} props={store} />
                    </>
                    <Footer />
                </div>
            </Router>
        </Provider>
    )
}

export default App
