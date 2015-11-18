var PatrolShipPiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection('patrol-ship')
	},
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			this.props.handleDirectionChange("patrol-ship", "vert")
		}
		else {
			this.props.handleDirectionChange("patrol-ship","hz")
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
			<div id="patrol-ship-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick}>
				{piece}
			</div>
		)
	}
})