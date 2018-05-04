import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col, Grid, PageHeader, Jumbotron, Button } from 'react-bootstrap';
import Center from 'react-center';
import InstagramEmbed from 'react-instagram-embed';
import StickyFooter from 'react-sticky-footer';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader style={{marginTop: 25, marginLeft: 25}}>
          #kebunkode
        </PageHeader>;
        <Center style={{height: 700, backgroundColor: 'black', flexDirection: 'column'}}>
          <div style={{color: 'white'}}>#kebunkode</div>
        </Center>
        <Center style={{height: 700, backgroundColor: 'darkgrey', flexDirection: 'column', opacity: 75}}>
          <div style={{color: 'white'}}>#kebunkode</div>
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

export default App;
