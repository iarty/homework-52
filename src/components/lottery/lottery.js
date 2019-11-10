import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import Container from 'reactstrap/lib/Container';


export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <div className="text-center">
            <h1 className="my-5">Lottery</h1>
            <Button color="danger" className="mb-5">New numbers!</Button>
            <div className="d-flex mt-5 justify-content-around">
              <span className="display-3" style={{border:'1px solid red',borderRadius:'50%',width:'70px'}}>1</span>
              <span className="display-3" style={{border:'1px solid red',borderRadius:'50%',width:'70px'}}>2</span>
              <span className="display-3" style={{border:'1px solid red',borderRadius:'50%',width:'70px'}}>3</span>
              <span className="display-3" style={{border:'1px solid red',borderRadius:'50%',width:'70px'}}>4</span>
            </div>
          </div>
        </Container>

      </Fragment>
    )
  }
}
