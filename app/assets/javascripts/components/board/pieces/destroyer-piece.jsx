var DestroyerPiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection('destroyer')
	},
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			this.props.handleDirectionChange("destroyer", "vert")
		}
		else {
			this.props.handleDirectionChange("destroyer","hz")
		}
	},
	render:function() {
		var piece;
		if (this.props.direction === "hz") {
			piece = <DestroyerHz />
		}
		else {
			piece = <DestroyerVert />
		}
		return (
			<div id="destroyer-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick}>
				{piece}
			</div>
		)
	}
})