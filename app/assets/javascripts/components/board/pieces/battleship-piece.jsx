var BattleshipPiece = React.createClass({
	render:function(){
		
			var piece;
			if (this.props.direction = "hz") {
				piece = <BattleshipHz />
			}
			else {
				piece = <BattleshipVert />
			}


			return (
				<div id="aircraft-carrier-piece">
					{piece}
				</div>
			)
	}
})