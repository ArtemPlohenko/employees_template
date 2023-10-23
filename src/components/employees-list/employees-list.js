import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

// This is the EmployeesList component that receives data as a prop.
// const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  // Map through the data array to create a list of EmployeeListItem components.
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    // Pass the item properties as individual props to EmployeesListItem component.
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        // onToggleIncrease={() => onToggleIncrease(id)}
        // onToggleRise={() => onToggleRise(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
      />
    );
  });

  // console.log(elements);

  // Render the list of EmployeeListItem components inside a <ul> element.
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
