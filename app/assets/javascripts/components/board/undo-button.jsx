var UndoButton = React.createClass({
	handleUndoMove:function(e){
		e.preventDefault()
		this.props.handleUndo()
	},
	render:function(){
		return(
			<a href="#undo" onClick={this.handleUndoMove}>
				<div className="debugger undo-button" >
					<h4>UNDO </h4>
				</div>
			</a>
		)
	}
})