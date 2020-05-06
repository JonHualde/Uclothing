import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions.js';

import { GlobalStyle } from './global.styles';
//import styled from 'styled-components'; IMPORT STYLED COMPONENTS 

import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkoutpage/checkout.component.jsx';


const App = ({ checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/sign-in' 
          render={ () => currentUser 
          ? ( <Redirect to='/' /> ) 
          : ( <SignInAndSignUpPage />) 
        }/>
        <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
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


// -------------------- Quick recap on Hooks --------------------
// ComponentDidMount
// ----- Class -----
// componentDidMount() {
//     console.log('I just mounted!');
// }
// ----- Hooks -----
// useEffect(() => {
//     console.log('I just mounted!');
// }, [])


// ComponentWillUnmount
// ----- Class -----
// componentWillUnmount() {
//     console.log('I am unmounting');
// }
// ----- Hooks -----
// useEffect(() => {
//     return () => console.log('I am unmounting');
// }, [])


// ComponentWillReceiveProps
// ----- Class -----
// componentWillReceiveProps(nextProps) {
//     if (nextProps.count !== this.props.count) {
//         console.log('count changed', nextProps.count);
//     }
// }
// ----- Hooks -----
// useEffect(() => {
//     console.log('count changed', props.count);
// }, [props.count])