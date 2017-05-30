var React = require('react');


var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a web application that I have built on React and Node
        to show some of my works as portolio items
      </p>
      <p>
        This is some of the tools I have been working with:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Javascript Framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Weather datas by City Name
        </li>
      </ul>
    </div>
  );
};
module.exports = About;
