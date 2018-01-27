var React = require('react');
var Nav = require("react-bootstrap/lib/Nav");
var Navbar = require("react-bootstrap/lib/Navbar");
var NavbarBrand = require("react-bootstrap/lib/NavbarBrand");
var NavbarCollapse = require("react-bootstrap/lib/NavbarCollapse");
var NavbarHeader = require("react-bootstrap/lib/NavbarHeader");
var NavbarToggle = require("react-bootstrap/lib/NavbarToggle");
var Container = require('./Container.js');
var createReactClass = require('create-react-class');

var Scroll  = require('react-scroll');
 
var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var Site = createReactClass({
	componentDidMount: function() {
    scrollSpy.update();
 
  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  render: function(){
		return (
			<div>
				<Navbar fixedTop inverse collapseOnSelect>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a className="navbar-brand" href="#"><img src=".\imgs\logo.png"/></a>
				      </Navbar.Brand>
				      <Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <ul className="nav navbar-nav navbar-right">
				      	<li>
					        <Link activeClass="active" to="inicio" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
					        	Início
					        </Link>
					    </li>
					     <li>
				        	<Link activeClass="active" to="sobre" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
				        		Quem Somos
				        	</Link>
				        </li>
				        <li>
				        	<Link activeClass="active" to="equipe" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
				        		A Equipe
				        	</Link>
				        </li>
				        <li>
				        	<Link activeClass="active" to="contato" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
				        		Contato
				        	</Link>
				        </li>
				      </ul>
				    </Navbar.Collapse>
				</Navbar>
				<Container />
			</div>
		)
	}
});

module.exports = Site;