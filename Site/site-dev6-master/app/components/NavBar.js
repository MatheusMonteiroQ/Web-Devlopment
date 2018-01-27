var React = require('react');
var createReactClass = require('create-react-class');

var NavBar = createReactClass({
	render: function(){
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="#"><img alt="Brand" src=".\imgs\logo.png"/></a>
			    </div>
			     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      				<ul className="nav navbar-nav navbar-right">
        				<li className="active"><a href="#">Início</a></li>
        				<li><a href="#">Quem somos</a></li>
        				<li><a href="#">A Equipe</a></li>
        				<li><a href="#">Projetos</a></li>
        			</ul>
        		</div>
			  </div>
			</nav>
		)
	}
});

module.exports = NavBar;