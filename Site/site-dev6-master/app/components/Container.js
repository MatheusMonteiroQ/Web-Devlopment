var React = require('react');
var Saudacao = require('./Saudacao.js');
var Sobre = require('./Sobre.js');
var Equipe = require('./Equipe.js');
var Rodape = require('./Rodape.js');
var Contato = require('./Contato.js');
var createReactClass = require('create-react-class');

var Container = createReactClass({
	render: function(){
		return(
			<div>
				<Saudacao />
				<Sobre />
				<Equipe />
				<Contato />
				<Rodape />
			</div>
		)
	}
});

module.exports = Container;