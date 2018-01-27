var React = require('react');
var createReactClass = require('create-react-class');
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var Contato = createReactClass({
	componentDidMount: function() {
      scrollSpy.update();
 
    },
    componentWillUnmount: function() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    },
	validaForm: function(){
	
			
	if(document.dados.txtnome.value=="" || document.dados.txtnome.value == null || document.dados.txtnome.value.lenght < 3 
	|| document.dados.txtemail.value=="" || document.dados.txtemail.value == null ||document.dados.txtemail.value.lenght < 3 || 
	document.dados.txtsubject == "" || document.dados.txtsubject == null || document.dados.txtsubject.value.lenght < 3 ||
	document.dados.comment.value=="" || document.dados.comment.value == null || document.dados.comment.value.lenght < 5) 
			{
				document.getElementById("msg").innerHTML="Preencha todos os dados corretamente!";
				document.getElementById("msg").style.opacity = "1";
				document.dados.txtnome.focus();
				document.dados.txtemail.focus();
				document.dados.txtsubject.focus();
				document.dados.comment.focus();
				return false;
			}
	else {
		window.open("http://pt.stackoverflow.com");
	}
	
	
	},
  render: function() {
	  return(
	
			
			<Element name="contato" className="contato">
				<div className="jumbotron containerContato">
					<div>
						<h1><strong>Contato</strong></h1>
						
					</div>
					<div id="wrap">
						<h3>Dúvidas? Entre em contato.</h3>
					</div>
					<form className="dados" name="dados" method="post" action="envia.php">
						<fieldset>
									<div className="col-lg-4 col-sm-4">
										<input type="text" className="form-control input-box" id="txtnome" name="txtnome" placeholder="Seu nome"  />
									</div>

								  <div className="col-lg-4 col-sm-4">
										<input type="email" className="form-control input-box" id="txtemail" name="txtemail"  placeholder="Seu email" required/>  
								  </div>

								  <div className="col-lg-4 col-sm-4">
									<input type="text" className="form-control input-box" id="txtsubject" name="txtsubject" placeholder="Assunto"/>
								  </div>
								  
								  <div className="form-group">
									  <textarea className="form-control input-area" placeholder="Sua mensagem" rows="15" name="comment" id="comment"/>
								</div>
								<button type="button"  className="btn btn-success btn-lg" onClick={this.validaForm}>Enviar</button>
								
								
						</fieldset>
						<div id="msg" className="alert alert-danger">...</div>
					</form>
				</div>
			</Element>

	  )
   }
});

module.exports = Contato;