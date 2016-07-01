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
	pieceDirection:function(){
		var piece;
		if (this.props.data.userPieces.aircraftCarrier.direction==="hz") {
			piece = <AircraftCarrierHz data={this.props.data}/>
		}
		else {
			piece = <AircraftCarrierVert data={this.props.data}/>
		}
		return piece
	},
	render:function() {
		selected = ""
		if (this.props.data.selected.piece==="aircraftCarrier") {
			selected = "selected-piece"
		}
		return (
			<div id="aircraft-carrier-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick} className={selected} >
				{this.pieceDirection()}
			</div>
		)
	}
})