var React = require('react');
var Scroll  = require('react-scroll');
var createReactClass = require('create-react-class');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

function timeImage() {
	if(document.getElementById('saudacao').src.substring(34,document.getElementById('saudacao').src.length) == "saudacao.gif"){
		setTimeout(function(){document.getElementById('saudacao').src= "./imgs/logo.png"}, 1900);
	}
}

var Saudacao = createReactClass({
	  componentDidMount: function() {
      scrollSpy.update();
      timeImage();
 
    },
    componentWillUnmount: function() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    },
	render: function(){
		return(
			<div className="container">
				<Element name="inicio" className="bg1"></Element>
				<div className="jumbotron conteudo">
				<div className="row">
				<div className="col-xs-12">
				  <img id="saudacao" src="./imgs/saudacao.gif"/>
				</div>
				</div>
				<div className="row">
				<div className="col-xs-12 saudacao">
					<h1><strong>Quebrando barreiras!</strong></h1>
				 	<p><Link to="sobre" smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive} className="btn btn-success btn-lg" href="#" role="button">Conheça a gente</Link></p>
				</div>
				 </div>
				 </div>
			 </div>
		)
	}
});

module.exports = Saudacao;