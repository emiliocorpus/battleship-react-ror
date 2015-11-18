var PatrolShipPiece = React.createClass({
	render:function(){
			var piece;
			if (this.props.direction = "hz") {
				piece = <PatrolShipHz />
			}
			else {
				piece = <PatrolShipVert />
			}


			return (
				<div id="aircraft-carrier-piece">
					{piece}
				</div>
			)
	}
})