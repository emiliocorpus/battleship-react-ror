var SubmarineHz = React.createClass({
	render:function(){
		return (
			<table className="submarine" title="Submarine">
				<tbody>
					<tr>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="amount">x{this.props.data.userPieces.submarine.piecesLeft}</td>
					</tr>
				</tbody>
			</table>
		)
	}
})