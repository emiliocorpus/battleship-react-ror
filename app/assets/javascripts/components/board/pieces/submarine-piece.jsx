var SubmarinePiece = React.createClass({
	handleDoubleClick:function(){
		if (this.props.direction==="hz") {
			console.log('workig hz')
			this.props.handleDirectionChange("submarine", "vert")
		}
		else {
			this.props.handleDirectionChange("submarine","hz")
			console.log('working vert')

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
			<div id="submarine-piece" onDoubleClick={this.handleDoubleClick}>
				{piece}
			</div>
		)
	}
})