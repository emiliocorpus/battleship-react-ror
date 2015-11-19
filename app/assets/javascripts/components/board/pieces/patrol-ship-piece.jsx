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
	render:function() {
		var piece;
		if (this.props.direction === "hz") {
			piece = <PatrolShipHz amountLeft={this.props.amountLeft}/>
		}
		else {
			piece = <PatrolShipVert amountLeft={this.props.amountLeft}/>
		}
		return (
			<div id="patrol-ship-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick}>
				{piece}
			</div>
		)
	}
})