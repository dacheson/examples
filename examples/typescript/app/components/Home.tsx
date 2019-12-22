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
        { this.renderScheduleList() }
        { this.renderDropdownMenu() }
        { this.renderTimeSelection() }
        { this.renderSubmitToListButton() }
      </div>
    );
  }

  renderSubmitToListButton() {
    return (
      <div>
        <button type="submit" onClick={this.submitToListClicked}>Submit to List</button>
      </div>
    );
  }

  renderScheduleList() {
    let x = ["Operation 1", "Operation 2", "Operation 3"];
    return (
      <ul>
        { x.map((item,i) => <li key={i}>{item}</li>) }
      </ul>
    );
  }

  renderSublist() {
    let x = ["Operation 1", "Operation 2", "Operation 3"];
    return (
        x.map((item,i) => <li key={i}>Test</li>)
    );
  }

  renderTimeSelection() {
    return (
      <div>
        <h3>Pick a time</h3>
        <input type="text"/>
      </div>
    );
  }

  renderDropdownMenu() {
    return (
      <div>
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

  submitToListClicked() {
    alert("Hey ballbag");
  }
}
