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
	render:function() {
		var piece;
		if (this.props.direction === "hz") {
			piece = <SubmarineHz amountLeft={this.props.amountLeft}/>
		}
		else {
			piece = <SubmarineVert amountLeft={this.props.amountLeft}/>
		}
		return (
			<div id="submarine-piece" onDoubleClick={this.handleDoubleClick} onClick={this.handleSingleClick}>
				{piece}
			</div>
		)
	}
})