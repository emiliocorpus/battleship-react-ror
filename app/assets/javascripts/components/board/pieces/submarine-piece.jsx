var SubmarinePiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection({piece:"submarine", direction:this.props.direction})
	},
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			this.props.handleDirectionChange({piece:"submarine", direction:"vert"})
		}
		else {
			this.props.handleDirectionChange({piece:"submarine", direction:"hz"})
		}
	},
	pieceDirection:function(){
		var piece;
		if (this.props.data.userPieces.submarine.direction === "hz") {
			piece = <SubmarineHz data={this.props.data}/>
		}
		else {
			piece = <SubmarineVert data={this.props.data}/>
		}
		return piece
	},
	render:function() {
		selected = ""
		if (this.props.data.selected.piece==="submarine") {
			selected = "selected-piece"
		}

		return (
			<div id="submarine-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick} className={selected}>
				{this.pieceDirection()}
			</div>
		)
	}
})