console.log('App.js is running.');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer !',
  options: ['One', 'Two']
}

/*var app = {
  title: 'Indecision App',
  options: ['One', 'Two']
}*/

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle ? app.subtitle : <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options':'No Options'}</p>
  </div>
);

var user = {
  name: 'JNetto',
  age: 44,
  location: 'Campinas / São Paulo / Brasil'
}

/*var user = {
  age: 10,
  location: 'Campinas / São Paulo / Brasil'
}*/

// var userName = 'JNetto';
// var userAge = 44;
// var userLocation = 'Campinas / São Paulo / Brasil'
// Create a templateTwo var JSX expression

function getLocation(location) {
  if (location) {
    return <p>Localtion: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot);
