'use strict';

console.log('App.js is running.');

var app = {
  title: 'Indecision App',
  subtitle: 'Do something !!'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);

/*var user = {
  name: 'JNetto',
  age: 44,
  location: 'Campinas / São Paulo / Brasil'
}*/

var user = {
  name: 'JNetto',
  age: 44

  // var userName = 'JNetto';
  // var userAge = 44;
  // var userLocation = 'Campinas / São Paulo / Brasil'
  // Create a templateTwo var JSX expression

};function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    getLocation(user.location)
  )
);

var appRoot = document.getElementById('app');

//ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
