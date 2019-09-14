import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';



class Item extends Component {

  constructor(props){
    super(props);

    this.state = {
      constructionData: {},
      documents:['Floorplan', 'Blueprint'],
      team:[{
        name: 'Jane',
        job: 'Architect',
        image: 'https://2atstartup.com.au/wp-content/uploads/2019/05/girl-avatar.png'
      },{
        name: 'Derek',
        job: 'Electrician',
        image: 'https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'
      },{
        name: 'Jim',
        job: 'Project Manager',
        image: 'https://imgur.com/I80W1Q0.png'
      }]
    };
  }


  render(){
    return(
      <Container>
        <Row>
          <Col lg={4}>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src="https://www.screed.com.sg/wp-content/uploads/2018/07/IDETTA-Slice-of-Cake-Slim-Ceiling-Lamp.jpg"
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col lg={4}>
            <Row>
              <h3>Documents</h3>
              <ListGroup variant="flush">
                  {
                    this.state.documents.map( doc => (
                      <ListGroup.Item>
                        {doc}
                        <Link to="/remove">Remove</Link> | <Link to="/download">Download</Link>
                      </ListGroup.Item>

                    ))
                  }
                <ListGroup.Item>
                  <Link to='/upload-image'>
                  <Image style={{maxWidth:'20px'}} src={process.env.PUBLIC_URL +`Upload.png`}/> {' '}
                  Upload Documents
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Row>
            <Row>
              <h3>Team</h3>
              <Row>
              {
                this.state.team.map( member => (
                  <Col lg={3}>
                    <Image style={{maxWidth:'50px'}} src={member.image} roundedCircle />
                    <p>{member.name}</p>
                    <p>{member.job}</p>
                  </Col>
                ))
              }
              </Row>
              <Link to='/add-team-members'>
                <Image style={{maxWidth:'20px'}} src={process.env.PUBLIC_URL +`Add.png`}/> {' '}
                Add team members
              </Link>

            </Row>
          </Col>

          <Col lg={4}>
            <h3>Bids</h3>
            <Row style={{textAlign: 'center'}}>
              <Col style={{background:'turquoise', color:'white'}}>
                <Image style={{maxWidth:'100%'}} src={process.env.PUBLIC_URL +`bestBid.png`}/>
                $$$$

                <h5>Best Offer</h5>
              </Col>
              <Col style={{background:'grey', color:'white'}}>
                <Image style={{maxWidth:'100%'}} src={process.env.PUBLIC_URL +`averageBid.png`}/>
                $$$$

                <h5>Average Bid</h5>
              </Col>

            </Row>
            <Row>
              bidder's list
            </Row>
          </Col>
        </Row>
      </Container>


    );
  }
}

export default Item;
