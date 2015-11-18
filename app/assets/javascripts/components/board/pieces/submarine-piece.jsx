var SubmarinePiece = React.createClass({
	handleSingleClick:function(){
		this.props.sendSelection('submarine')
	},
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			this.props.handleDirectionChange("submarine", "vert")
		}
		else {
			this.props.handleDirectionChange("submarine","hz")
		}
	},
	render:function() {
		var piece;
		if (this.props.direction === "hz") {
			piece = <SubmarineHz />
		}
		else {
			piece = <SubmarineVert />
		}
		return (
			<div id="submarine-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick}>
				{piece}
			</div>
		)
	}
})