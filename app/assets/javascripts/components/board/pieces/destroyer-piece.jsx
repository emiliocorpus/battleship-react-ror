var DestroyerPiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection({piece:'destroyer',direction:this.props.direction})
	},
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			this.props.handleDirectionChange({piece:"destroyer", direction:"vert"})
		}
		else {
			this.props.handleDirectionChange({piece:"destroyer",direction:"hz"})
		}
	},
	render:function() {
		var piece;
		if (this.props.direction === "hz") {
			piece = <DestroyerHz amountLeft={this.props.amountLeft}/>
		}
		else {
			piece = <DestroyerVert amountLeft={this.props.amountLeft}/>
		}
		return (
			<div id="destroyer-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick}>
				{piece}
			</div>
		)
	}
})