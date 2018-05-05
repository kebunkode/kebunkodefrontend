import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, PageHeader, Jumbotron, Button } from 'react-bootstrap';
import Center from 'react-center';
import InstagramEmbed from 'react-instagram-embed';
import StickyFooter from 'react-sticky-footer';
import GoogleMapReact from 'google-map-react';
import Sticky from 'react-stickynode';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
      <div>
        <Sticky top='#header' bottomBoundary='#content'>
          <div style={{backgroundColor: 'blue', color: 'yellow', padding: 25}}>
            #kebunkode
          </div>
        </Sticky>
        <Center style={{height: 700, backgroundColor: 'black', flexDirection: 'row'}}>
          <div style={{color: 'white', margin: 10}}><Link to='/benih'>#benih</Link></div>
          <div style={{color: 'white', margin: 10}}><Link to='/IOT'>#IOT</Link></div>
          <div style={{color: 'white', margin: 10}}><Link to='/pot'>#pot</Link></div>
        </Center>
        <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            backgroundColor: "green",
            padding: "2rem"
          }}
          stickyStyles={{
            backgroundColor: "green",
            padding: "2rem"
          }}
          >
          copyright #kebunkode
        </StickyFooter>
      </div>
    );
  }
}

export default Home;
