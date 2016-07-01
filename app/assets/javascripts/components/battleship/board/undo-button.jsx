var UndoButton = React.createClass({
	handleUndoMove:function(e){
		e.preventDefault()
		this.props.handleUndo()
	},
	render:function(){
		return(
			<a href="#undo" className="btn undo-button" onClick={this.handleUndoMove}>
					Undo
			</a>
		)
	}
})