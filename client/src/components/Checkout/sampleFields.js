export default [
  {type: {
    elementType: 'select',
    elementConfig: {
        options: [
            {value: 'finish', displayValue: 'Finish Sample'},
            {value: 'door', displayValue: 'Door Sample'}
        ]
    },
    value: 'fastest',
    validation: {},
    valid: true
  }},
  {material: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Material'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  }},
  {finish: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Finish'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  }},
  {doorName: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Door Name'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  }},
  {doorDetails: {
    elementType: 'input',
    elementConfig: {
      type: 'text',
      placeholder: 'Door Details'
    },
    value: '',
    validation: {
      required: true
    },
    valid: false,
    touched: false
  }}
];
