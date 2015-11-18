var BattleshipPiece = React.createClass({
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
			piece = <BattleshipHz />
		}
		else {
			piece = <BattleshipVert />
		}
		return (
			<div id="battleship-piece" onDoubleClick={this.handleDoubleClick}>
				{piece}
			</div>
		)
	}
})