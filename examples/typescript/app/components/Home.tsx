import * as React from 'react';
import { Component } from 'react';
// import { Link } from 'react-router-dom';
// const routes = require('../constants/routes.json');
const styles = require('./Home.css');

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h3>Pick a position</h3>
        <select>
          <option value="punnani">1</option>
          <option value="vagisil">2</option>
          <option value="sore bum illness">3</option>
          <option value="poof poof pop  ">4</option>
        </select>
      </div>
    );
  }
}
