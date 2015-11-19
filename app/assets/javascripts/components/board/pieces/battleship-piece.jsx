var BattleshipPiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection({piece:'battleship', direction: this.props.data.battleship})
	},
	handleDoubleClick:function(){
		if (this.props.data.battleship==="hz") {
			this.props.handleDirectionChange({piece:"battleship", direction:"vert"})
		}
		else {
			this.props.handleDirectionChange({piece:"battleship",direction:"hz"})
		}
	},
	pieceDirection:function(){
		var piece;
		if (this.props.data.battleship === "hz") {
			piece = <BattleshipHz data={this.props.data}/>
		}
		else {
			piece = <BattleshipVert data={this.props.data} />
		}
		return piece
	},
	render:function() {
		selected = ""
		if (this.props.data.selected.piece==="battleship") {
			selected = "selected-piece"
		}
		return (
			<div id="battleship-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick} className={selected}>
				{this.pieceDirection()}
			</div>
		)
	}})