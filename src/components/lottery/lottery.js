import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import Container from 'reactstrap/lib/Container';


export default class index extends Component {
  num = [];
  genRand = () => {
    for (let index = 0; index < 4; index++) {
      this.num.push(Math.floor(Math.random() * (36 - 5 + 1)) + 5);
    }
    return this.num.sort((a, b) => { return a - b })
  }
  render = () => {
    const sortNum = this.genRand();
    return (
      <Fragment>
        <Container>
          <div className="text-center">
            <h1 className="my-5">Lottery</h1>
            <Button color="danger" className="mb-5">New numbers!</Button>
            <div className="d-flex mt-5 justify-content-around">
              <span className="display-3" style={{ border: '1px solid red', borderRadius: '50%', width: '70px' }}>{sortNum[0]}</span>
              <span className="display-3" style={{ border: '1px solid red', borderRadius: '50%', width: '70px' }}>{sortNum[1]}</span>
              <span className="display-3" style={{ border: '1px solid red', borderRadius: '50%', width: '70px' }}>{sortNum[2]}</span>
              <span className="display-3" style={{ border: '1px solid red', borderRadius: '50%', width: '70px' }}>{sortNum[3]}</span>
            </div>
          </div>
        </Container>
      </Fragment>
    )
  }
}
