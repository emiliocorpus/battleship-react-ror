var DestroyerPiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection({piece:'destroyer',direction:this.props.destroyer})
	},
	handleDoubleClick:function(){
		if (this.props.data.destroyer==="hz") {
			this.props.handleDirectionChange({piece:"destroyer", direction:"vert"})
		}
		else {
			this.props.handleDirectionChange({piece:"destroyer",direction:"hz"})
		}
	},

	pieceDirection:function(){
		var piece;
		if (this.props.data.destroyer=== "hz") {
			piece = <DestroyerHz data={this.props.data}/>
		}
		else {
			piece = <DestroyerVert data={this.props.data}/>
		}
		return piece
	},
	render:function() {
		selected = ""
		if (this.props.data.selected.piece==="destroyer") {
			selected = "selected-piece"
		}
		return (
			<div id="destroyer-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick} className={selected}>
				{this.pieceDirection()}
			</div>
		)
	}
})