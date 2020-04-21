import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { googleSignInStart } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
//import { selectCollectionForPreview } from './redux/shop/shop.selector';

import './App.css';
//import styled from 'styled-components'; IMPORT STYLED COMPONENTS 

import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkoutpage/checkout.component.jsx';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    // const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth)

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser ({ 
    //           id: snapShot.id,
    //           ...snapShot.data() 
    //       })
    //         const { currentUser } = this.props;
    //         if (currentUser.displayName) {
    //           alert(`Welcome to you ${currentUser.displayName}`)}
    //           console.log('current', currentUser.displayName)
    //     })
    //   } 

    //   setCurrentUser (userAuth);
    // });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/sign-in' render={ () => this.props.currentUser ? 
              ( <Redirect to='/' /> ) : ( <SignInAndSignUpPage />) }/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  googleSignInStart: user => dispatch(googleSignInStart(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);



// ---- EXAMPLE OF STYLED DIV ----- //
// const Text = styled.div`
//   font-size: 64px;
// `;

// Implement it this way into the class: 
// <div>
//   <Text> I AM HERE </Text> 
// </div>

// ------------- WE ALSO CAN PASS PROPS INTO THE ELEMENT TO AUTOMATICALLY RENDER A PARTICULAR STYLE. ------------

// <div>
//   <Text isActive={true}> I AM HERE </Text> 
// </div>

// const Text = styled.div`
//   font-size: 64px;
//   border: ${ ({ isActive }) => isActive ? '2px solid black' : '3px dashed green' };
// `;
// COMPONENT IS NOW ABLE TO LEVERAGE PROPS! 

// --------- FUNCTION TO PUSH DATA TO FIREBASE IF NEEDED --------- // 
// addCollectionAndDocuments('collections', collections.map(
//        ({title, items})  =>  ({title, items}) ));