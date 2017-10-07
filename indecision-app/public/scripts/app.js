'use strict';

console.log('App.hs is running.');

//JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App.'
  ),
  React.createElement(
    'p',
    null,
    'This is come info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One: '
    ),
    React.createElement(
      'li',
      null,
      'Item One: '
    )
  )
);

// Create a templateTwo var JSX expression
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Jo\xE3o Netto'
  ),
  React.createElement(
    'p',
    null,
    'Age: 44'
  ),
  React.createElement(
    'p',
    null,
    'Location: CPS/SP/BR'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
