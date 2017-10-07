console.log('App.hs is running.');

//JSX - JavaScript XML

//var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
  'h1',
  { id: 'myApp' },
  'This is JSX from app.js!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
