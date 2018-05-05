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


class IOT extends Component {
  render() {
    return (
      <div>
        <Center style={{height: 700, backgroundColor: 'black', flexDirection: 'row'}}>
          <Link to='/' style={{color: 'red'}}>#back</Link>
          <div style={{color: 'white', margin: 10}}>#IOT</div>
        </Center>
      </div>
    );
  }
}

export default IOT;
