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
    let imgUrl = 'images/header.jpg'
    return (
      <div>
        <Sticky top='#header' bottomBoundary='#content'>
          <div style={{
            backgroundColor: 'brown',
            color: 'yellow',
            padding: 25,
            // backgroundImage: 'url(' + require('./images/header.jpg') + ')'
          }}
          >
            #kebunkode #one_stop_smart_agriculture_solution
          </div>
        </Sticky>
        <Center
          style={{
            height: 700,
            backgroundColor: 'black',
            flexDirection: 'row',
            // backgroundImage: 'url(' + require('./images/garden.jpg') + ')'
          }}>
          <div style={{color: 'white', margin: 10}}><Link to='/benih' style={{color: 'white'}}>#benih</Link></div>
          <div style={{color: 'white', margin: 10}}><Link to='/IOT' style={{color: 'white'}}>#IOT</Link></div>
          <div style={{color: 'white', margin: 10}}><Link to='/pot' style={{color: 'white'}}>#pot</Link></div>
        </Center>
        <StickyFooter
          bottomThreshold={50}
          normalStyles={{
            // backgroundImage: 'url(' + require('./images/header.jpg') + ')',
            backgroundColor: "brown",
            padding: "2rem",
            color: "yellow"
          }}
          stickyStyles={{
            // backgroundImage: 'url(' + require('./images/header.jpg') + ')',
            backgroundColor: "brown",
            padding: "2rem",
            color: "yellow"
            // width: "100%"
          }}
          >
          copyright #kebunkode
        </StickyFooter>
      </div>
    );
  }
}

export default Home;
