var BattleshipPiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection('battleship')
	},
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			this.props.handleDirectionChange("battleship", "vert")
		}
		else {
			this.props.handleDirectionChange("battleship","hz")
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