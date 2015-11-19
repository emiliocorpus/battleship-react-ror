var BattleshipPiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection({piece:'battleship', direction: this.props.direction})
	},
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			this.props.handleDirectionChange({piece:"battleship", direction:"vert"})
		}
		else {
			this.props.handleDirectionChange({piece:"battleship",direction:"hz"})
		}
	},
	render:function() {
		var piece;
		if (this.props.direction === "hz") {
			piece = <BattleshipHz amountLeft={this.props.amountLeft}/>
		}
		else {
			piece = <BattleshipVert amountLeft={this.props.amountLeft} />
		}
		return (
			<div id="battleship-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick}>
				{piece}
			</div>
		)
	}})