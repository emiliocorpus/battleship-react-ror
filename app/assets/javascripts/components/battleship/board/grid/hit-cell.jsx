var HitCell = React.createClass({
	fireShot:function(row, col) {
		this.props.fireShot(this.props.row,this.props.col)
	},
	render:function() {
		var display;
		switch (this.props.cell.cellType) {

			case "empty":
				display = "board-cell-empty";
				break;
			case "hit":
				display = "hit-cell-ship";
				break;
			case "miss":
				display = "missed-cell-ship";
				break;
		}
		return (
			<td className={display} onClick={this.fireShot} >

			</td>
		)
	}
})