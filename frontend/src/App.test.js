import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {APIAddr} from './configs/APISettings'


import App from './components/App'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Main from './components/Main'
import Auth from './components/Auth'
import ProjectView from './components/ProjectView'
import NOPE from './components/NOPE'

//-------------------------------------------------------------------------
describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
//-------------------------------------------------------------------------
describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
//-------------------------------------------------------------------------
describe('Nav', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Nav />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
//-------------------------------------------------------------------------
describe('Main', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Main />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
//-------------------------------------------------------------------------
describe('Auth', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Auth />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
//-------------------------------------------------------------------------
describe('ProjectView', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <ProjectView />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
//-------------------------------------------------------------------------
describe('NOPE', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <NOPE />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
//-------------------------------------------------------------------------
describe('Footer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( <Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
//-------------------------------------------------------------------------
// describe('LabeledInput', () => {
//   const LabeledInputParams = {
//     text:'agent',        
//     id: 'pro_agent',
//     required: true,
//     BR : true,

//   }

//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(                
//       <LabeledInput params={LabeledInputParams} />
//     , div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
// });
// //-------------------------------------------------------------------------
// describe('AppForm', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(                
//       <AppForm
//         id='SignUpForm'
//         url={APIAddr}
//         proto={SignUpFormConfig} 
//         submitText="SignUp" /> 
//     , div);
//     ReactDOM.unmountComponentAtNode(div);
//   });

  // test('has a valid snapshot', () => {
  //   const component = renderer.create( <App /> );
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });



// });