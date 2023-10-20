import React, { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false, // Initialize the "increase" state as "false"
      rise: false, // Initialize the "rise" state as "false"
    };
  }

  // Event handler for the "Increase" button
  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase, // Toggle the "increase" state
    }));
  };

  // Event handler for clicking on the label
  onRise = () => {
    this.setState(({ rise }) => ({
      rise: !rise, // Toggle the "rise" state
    }));
  };

  render() {
    const { name, salary } = this.props;
    const { increase, rise } = this.state;

    // Generate classes for styling the element based on the states
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase"; // Add the "increase" class when "increase" is true
    }
    if (rise) {
      classNames += " like"; // Add the "like" class when "rise" is true
    }

    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.onRise}>
          {name}
        </span>
        <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-cookie btn-sm " onClick={this.onIncrease}>
            <i className="fas fa-cookie"></i>
          </button>

          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
