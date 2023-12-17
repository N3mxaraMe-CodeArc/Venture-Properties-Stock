import React from 'react'
import PropTypes from 'prop-types'

const Tablemodel = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Site Name</th>
            <th scope="col">Category</th>
            <th scope="col">Sub Category</th>
            <th scope="col">Date</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td>{element.sitename}</td>
              <td>{element.category}</td>
              <td>{element.subCategory}</td>
              <td>{element.date.toLocaleDateString()}</td>
              <td>{element.quantity}</td>
              <td>Rs. {element.price}</td>
              <td>Rs. {element.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablemodel;

Tablemodel.propTypes = {
  data: PropTypes.array.isRequired
}
