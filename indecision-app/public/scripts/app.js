'use strict';

console.log('App.js is running.');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer !',
  options: ['One', 'Two']

  /*var app = {
    title: 'Indecision App',
    options: ['One', 'Two']
  }*/

};var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle ? app.subtitle : React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No Options'
  )
);

var user = {
  name: 'JNetto',
  age: 44,
  location: 'Campinas / São Paulo / Brasil'

  /*var user = {
    age: 10,
    location: 'Campinas / São Paulo / Brasil'
  }*/

  // var userName = 'JNetto';
  // var userAge = 44;
  // var userLocation = 'Campinas / São Paulo / Brasil'
  // Create a templateTwo var JSX expression

};function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Localtion: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot);
