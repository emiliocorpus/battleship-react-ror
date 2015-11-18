var DestroyerPiece = React.createClass({
	render:function(){
			var piece;
			if (this.props.direction = "hz") {
				piece = <DestroyerHz />
			}
			else {
				piece = <DestroyerVert />
			}


			return (
				<div id="aircraft-carrier-piece">
					{piece}
				</div>
			)
	}
})