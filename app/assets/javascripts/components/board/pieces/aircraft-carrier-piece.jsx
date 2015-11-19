var AircraftCarrierPiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection({piece:"aircraftCarrier", direction:this.props.direction})
	},
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			this.props.handleDirectionChange({piece:"aircraftCarrier", direction:"vert"})
		}
		else {
			this.props.handleDirectionChange({piece:"aircraftCarrier",direction:"hz"})
		}
	},
	render:function() {
		var piece;
		if (this.props.direction==="hz") {
			piece = <AircraftCarrierHz amountLeft={this.props.amountLeft}/>
		}
		else {
			piece = <AircraftCarrierVert amountLeft={this.props.amountLeft}/>
		}
		return (
			<div id="aircraft-carrier-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick}>
				{piece}
			</div>
		)
	}
})