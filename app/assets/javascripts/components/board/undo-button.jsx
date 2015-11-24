var UndoButton = React.createClass({
	handleUndoMove:function(){
		debugger
		event.preventDefault()
		this.props.handleUndo()
	},
	render:function(){
		return(
			<div className="debugger undo-button" onClick={this.handleUndoMove}>
				<h4>UNDO </h4>
			</div>
		)
	}
})