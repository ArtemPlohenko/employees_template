import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

// Define the main App component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Sample employee data
      data: [
        { name: "John C.", salary: 800, increase: false, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    // console.log(id);
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  render() {
    // Render the App component
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm />
      </div>
    );
  }
}

// Export the App component for use in other parts of your application
export default App;
