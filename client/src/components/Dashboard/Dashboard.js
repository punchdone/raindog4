import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h3>Sample Checkout List</h3>
      <div className="fixed-action-btn">
        <Link to="/samples/checkout" className="btn-floating btn-large green">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
