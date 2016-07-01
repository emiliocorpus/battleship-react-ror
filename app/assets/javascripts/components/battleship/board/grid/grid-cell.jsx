var GridCell = React.createClass({
	placePiece:function(row, col) {
		this.props.placePiece(this.props.row,this.props.col)
	},
	render:function() {
		var display;
		switch (this.props.cell.cellType) {
			case "empty":
				display = "board-cell-empty";
				break;
			case "ship":
				display = "board-cell-ship";
				break;
		}
		return (
			<td className={display} onClick={this.placePiece} >
				
			</td>
		)
	}
})