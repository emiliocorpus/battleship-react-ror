var PatrolShipPiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection({piece:"patrolShip", direction:this.props.direction})
	},
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			this.props.handleDirectionChange({piece:"patrolShip", direction:"vert"})
		}
		else {
			this.props.handleDirectionChange({piece:"patrolShip", direction:"hz"})
		}
	},

	pieceDirection:function(){
		var piece;
		if (this.props.data.userPieces.patrolShip.direction === "hz") {
			piece = <PatrolShipHz data={this.props.data}/>
		}
		else {
			piece = <PatrolShipVert data={this.props.data}/>
		}
		return piece
	},
	render:function() {
		selected = ""
		if (this.props.data.selected.piece==="patrolShip") {
			selected = "selected-piece"
		}
		return (
			<div id="patrol-ship-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick} className={selected}>
				{this.pieceDirection()}
			</div>
		)
	}
})