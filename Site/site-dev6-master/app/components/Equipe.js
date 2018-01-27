var React = require('react');
var $ = require('jquery');
var Scroll  = require('react-scroll');
var createReactClass = require('create-react-class');
 
var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var Equipe = createReactClass({
	componentDidMount: function() {
      scrollSpy.update();
 	  $("#wrap").load("getTeam.php");
    },
    componentWillUnmount: function() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    },
	render:function(){
		return(
			<div id="equipe" className="equipe">
				<div className="jumbotron conteudo">
					<Element name="equipe"><h1><strong>A Equipe</strong></h1></Element>
					<hr/>
					<div id="wrap">
					</div>
				</div>
			</div>
		)
	}
});
module.exports = Equipe;