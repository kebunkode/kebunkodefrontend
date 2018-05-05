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
import Acrylic from 'react-acrylic';
import GitHubFeed from 'react-github-activity'
var Blur = require('react-blur');

class Home extends Component {
  render() {
    let imgUrl = 'images/header.jpg'
    return (
      <div>
        <Sticky top='#header' bottomBoundary='#content' style={{flexDirection: 'row'}}>
          <div style={{
            backgroundColor: 'brown',
            color: 'yellow',
            padding: 25,
            // backgroundImage: 'url(' + require('./images/header.jpg') + ')'
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          >
            <div>#kebunkode</div>
            <div>#one_stop_smart_agriculture_solution</div>
          </div>
        </Sticky>
        <Center
          style={{
            height: 700,
            backgroundColor: 'black',
            flexDirection: 'column',
            // backgroundImage: 'url(' + require('./images/garden.jpg') + ')'
          }}>
          <div style={{color: 'white', margin: 10}}><Link to='/benih' style={{color: 'white'}}>#benih</Link></div>
          <div style={{color: 'white', margin: 10}}><Link to='/IOT' style={{color: 'white'}}>#IOT</Link></div>
          <div style={{color: 'white', margin: 10}}><Link to='/pot' style={{color: 'white'}}>#pot</Link></div>
          <img src={require('./images/smartfarming.jpg')}  />
        </Center>
        <Center
          style={{
            height: 700,
            backgroundColor: 'black',
            flexDirection: 'row',
            // backgroundImage: 'url(' + require('./images/garden.jpg') + ')'
          }}>
          <InstagramEmbed
            url='https://www.instagram.com/p/BiStkGKllnO'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            style={{margin: 40}}
          />
          <InstagramEmbed
            url='https://www.instagram.com/p/BiVSzEvg-hk'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            style={{margin: 40}}
          />
          <InstagramEmbed
            url='https://www.instagram.com/p/BiUOsvSFSqE'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
            style={{margin: 40}}
          />
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
