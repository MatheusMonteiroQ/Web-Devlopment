var React = require('react');
var createReactClass = require('create-react-class');
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var slideIndex = 0;
function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none"; 
	}
	slideIndex++;
	if (slideIndex > x.length) {slideIndex = 1} 
	 x[slideIndex-1].style.display = "block"; 
	 setTimeout(carousel, 6000);
}

var Sobre = createReactClass({
	componentDidMount: function() {
      scrollSpy.update();
      carousel();
 
    },
    componentWillUnmount: function() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    },	
  	render: function() {
	  return(
			<Element name="sobre" className="sobre">
			<div className="sobreCont"></div>
			<div className="bgSobre">
				<img className="mySlides w3-animate-fading" src="./imgs/sobre1.jpg"/>
				<img className="mySlides w3-animate-fading" src="./imgs/sobre3.jpg"/>
			</div>
					<div className="jumbotron conteudo faixa">
						<div>
							<h1><strong>Quem Somos</strong></h1>
							<hr className="sobreHr"/>
							<p>
								A Dev6 é um grupo formado por seis desenvolvedores com o 
								<br/>objetivo de criar e aperfeiçoar soluções na área de tecnologia da 
								<br/>informação, utilizando de forma eficiente o conhecimento individual de 
								<br/>cada integrante e a paixão em conectar o mundo ainda mais através da 
								<br/>informática.
							</p>
						</div>
					</div>
			</Element>
	  )
   }
});

module.exports = Sobre;