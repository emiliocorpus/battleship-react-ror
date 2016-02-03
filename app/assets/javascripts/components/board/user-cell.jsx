var UserCell = React.createClass({

	render:function() {
		var display;
		var text;

		switch (this.props.cell.cellType) {
			case "empty":
				display = "board-cell-empty";
				break;
			case "ship":
				display = "board-cell-ship";
				break;
		}
		switch (this.props.cell.hitStatus) {
			case null:
				text = ''
				break;
			case true:
				text = 'X'
				break;
		}
		return (
			<td className={display} >
				{text}
			</td>
		)
	}
})