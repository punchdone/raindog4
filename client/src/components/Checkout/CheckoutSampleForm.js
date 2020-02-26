import React from 'react';
import { Field } from 'redux-form';
import input from '../UI/Input/input';
import sampleFields from './sampleFields';

const SampleForm = ({ fields, meta: { error, submitFailed } }) => {
  const formElementsArray = [];
  for (let key in sampleFields) {
    formElementsArray.push({
      id: key,
      config: sampleFields[key]
    });
  }
  return (
    <ul>
      {fields.map((sample, index) => (
        formElementsArray.map(forElement => (
                <Input
                  key={formElement.id}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  invalid={!formElement.config.valid}
                  shouldValidate={formElement.config.validation}
                  touched={formElement.config.touched}
                  changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        ))
      )}






        <li key={index}>
          <button
            type="button"
            title="Remove Sample"
            onClick={() => fields.remove(index)}
          />
          <strong>Sample #{index + 1}</strong>
          <div>
            <div>
              <Field
                name={`${sample}.type`}
                type="select"
                component={input}
                label="Type"
                value="1">
                  <option value="1" selected>Finish Sample</option>
                  <option value="2">Door Sample</option>
              </Field>
            </div>
          </div>
          <Field
            name={`${sample}.material`}
            type="text"
            component={input}
            label="Material"
          />
          <Field
            name={`${sample}.finish`}
            type="text"
            component={input}
            label="Finish"
          />
        </li>
      ))}
        <li>
          <button
            className="blue btn-flat white-text"
            type="button"
            onClick={() => fields.push({})}>
              Add Sample
          </button>
          {submitFailed && error && <span>{error}</span>}
        </li>
    </ul>
  );
};

export default SampleForm;
