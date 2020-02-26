import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import CheckoutField from './CheckoutField';
import formFields from './formFields';
import SampleForm from './CheckoutSampleForm';


class CheckoutForm extends Component {

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field key={name} component={CheckoutField} type="text" label={label} name={name} />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onCheckoutSubmit)}>
          {this.renderFields()}
          <FieldArray name="samples" component={SampleForm} />
          <Link
            to="/samples"
            className="red btn-flat white-text">
            Cancel
          </Link>
          <button
            className="green btn-flat right white-text"
            type="submit"
          >
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
    const errors = {};

    const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!re.test(values.email)) {
      errors.email = 'This is not a valid email address';
    };

    _.each(formFields, ({ name }) => {
      if (!values[name]) {
        errors[name] = 'You must provide a value';
      }
    });

    return errors;
}

export default reduxForm({
  validate,
  form: 'checkoutForm',
  destroyOnUnmount: false
})(CheckoutForm);
