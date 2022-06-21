import React, { Component } from 'react'
import { Register } from './Components/Register'
import { Login } from './Components/Login'
import { auth, db } from './Config/Config'

export class App extends Component {

  state = {
      user: null,
  }

  componentDidMount() {

      // getting user info for navigation bar
      auth.onAuthStateChanged(user => {
          if (user) {
              db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                  this.setState({
                      user: snapshot.data().Name
                  })
              })
          }
          else {
              this.setState({
                  user: null
              })
          }
      })

  }

  render() {
      return (
          <ProductsContextProvider>
              <CartContextProvider>
                  <BrowserRouter>
                      <Switch>
                          {/* home */}
                          <Route exact path='/' component={() => <Home user={this.state.user} />} />
                          {/* register */}
                          <Route path="/register" component={Register} />
                          {/* login */}
                          <Route path="/login" component={Login} />
                          <Route component={NotFound} />
                      </Switch>
                  </BrowserRouter>
              </CartContextProvider>
          </ProductsContextProvider>
      )
  }
}

export default App
