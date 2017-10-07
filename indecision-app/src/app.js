console.log('App.hs is running.');

//JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App.</h1>
    <p>This is come info</p>
    <ol>
      <li>Item One: </li>
      <li>Item One: </li>
    </ol>
  </div>
);

// Create a templateTwo var JSX expression
var templateTwo = (
  <div>
    <h1>João Netto</h1>
    <p>Age: 44</p>
    <p>Location: CPS/SP/BR</p>
  </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
