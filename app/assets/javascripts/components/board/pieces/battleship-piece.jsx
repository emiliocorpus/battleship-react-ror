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
			piece = <BattleshipHz />
		}
		else {
			piece = <BattleshipVert />
		}
		return (
			<div id="battleship-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick}>
				{piece}
			</div>
		)
	}})