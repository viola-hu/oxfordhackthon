import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';



class Supplier extends Component {

  constructor(props){
    super(props);

    this.state = {
      'rating': '4',
      'description': "Australia's largest supplier of commercial grade solar panels",
      'certification': 'Cert IV',
      'bid': '$1,000,000.00',
      'completed': 140

    };
  }


  render(){
    return(
      <div>
          <h1>Welcome to the supplier</h1>
      </div>

    );
  }
}

export default Supplier;
