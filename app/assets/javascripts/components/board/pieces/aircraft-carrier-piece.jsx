var AircraftCarrierPiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection('aircraft-carrier')
	},
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			this.props.handleDirectionChange("aircraft-carrier", "vert")
		}
		else {
			this.props.handleDirectionChange("aircraft-carrier","hz")
		}
	},
	render:function() {
		var piece;
		if (this.props.direction === "hz") {
			piece = <AircraftCarrierHz />
		}
		else {
			piece = <AircraftCarrierVert />
		}
		return (
			<div id="aircraft-carrier-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick}>
				{piece}
			</div>
		)
	}
})