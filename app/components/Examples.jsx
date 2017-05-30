var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here some location that you can try out!</p>
      <ol>
        <li>
          <Link to='/?location=Castel%Rozzone'>Castel Rozzone, IT</Link>
        </li>
        <li>
          <Link to='/?location=Malaga'>Malaga, ES</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
