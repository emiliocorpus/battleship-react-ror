var SubmarinePiece = React.createClass({
	render:function(){
			var piece;
			if (this.props.direction = "hz") {
				piece = <SubmarineHz />
			}
			else {
				piece = <SubmarineVert />
			}
			return (
				<div id="aircraft-carrier-piece">
					{piece}
				</div>
			)
	}
})