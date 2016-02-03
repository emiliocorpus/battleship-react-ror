var UserCell = React.createClass({

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
			<td className={display} >

			</td>
		)
	}
})