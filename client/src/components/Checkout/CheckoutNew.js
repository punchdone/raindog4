import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import CheckoutForm from './CheckoutForm.js';
import CheckoutFormReview from './CheckoutFormReview';

class CheckoutNew extends Component {
  state = {
    showReview: false
  };

  renderContent() {
    if (this.state.showReview) {
      return <CheckoutFormReview
        onCancel={() => this.setState({ showReview: false })}
       />;
    }
    return <CheckoutForm
     onCheckoutSubmit={() => this.setState({ showReview: true })}
    />
  }

  render() {
    if (this.state.showReview) {

    }
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'checkoutForm'
})(CheckoutNew);
