var PatrolShipPiece = React.createClass({
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			console.log('workig hz')
			this.props.handleDirectionChange("patrol-ship", "vert")
		}
		else {
			this.props.handleDirectionChange("patrol-ship","hz")
			console.log('working vert')
		}
	},
	render:function() {
		var piece;
		if (this.props.direction === "hz") {
			piece = <PatrolShipHz />
		}
		else {
			piece = <PatrolShipVert />
		}
		return (
			<div id="patrol-ship-piece" onDoubleClick={this.handleDoubleClick}>
				{piece}
			</div>
		)
	}
})