var React = require('react');
var createReactClass = require('create-react-class');

var Rodape = createReactClass({
	render: function(){
		return (
			<div className="footer">
					<div className="col-md-3">
					
						
					</div>
					<div className="col-md-6 bl">
							<h4>Quebrando Barreiras desde 2017 ©</h4><p/>
							<a href="" target="_blank"><span className="social"><img src="./imgs/facebook.svg"/></span></a>
							<a href="" target="_blank"><span className="social"><img src="./imgs/instagram.svg"/></span></a>
					</div>
					<div className="col-md-3"></div>
			</div>
			
		)
	}
});

module.exports = Rodape;