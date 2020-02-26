import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../store/actions';

const CheckoutFormReview = ({ onCancel, formValues, checkoutSamples }) => {

  console.log(formValues.samples);
  let i = 0;

  const reviewFields = _.map(formFields, ({ name }) => {
    return (
        <div key={name}>{formValues[name]}</div>
    );
  });

  const sampleFields = _.map(formValues.samples, ({ material, finish }) => {
    i++;
    console.log(i, ': ', material, finish);
    return (
      <tr key={i} className="striped">
        <td>{i}</td>
        <td></td>
        <td>{material}</td>
        <td>{finish}</td>
      </tr>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        <label>Client:</label>
          {reviewFields}
        <label>Samples:</label>
        <table>
          <thead>
            <tr>
              <th>Line#</th>
              <th>Type</th>
              <th>Material</th>
              <th>Finish</th>
            </tr>
          </thead>
          <tbody>
            {sampleFields}
          </tbody>
        </table>

      </div>
      <hr />
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => checkoutSamples(formValues)}
        className="green btn-flat white-text right"
      >
        Send Email
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.checkoutForm.values
  };
};

export default connect(mapStateToProps, actions)(CheckoutFormReview);
