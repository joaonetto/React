console.log('App.hs is running.');

var app = {
  title: 'Indecision App',
  subtitle: 'Do something !!'
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

var user = {
  name: 'JNetto',
  age: 44,
  location: 'Campinas / São Paulo / Brasil'
}
// var userName = 'JNetto';
// var userAge = 44;
// var userLocation = 'Campinas / São Paulo / Brasil'
// Create a templateTwo var JSX expression
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot);
