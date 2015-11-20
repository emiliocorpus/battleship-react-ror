var AircraftCarrierVert = React.createClass({
	render:function(){
		return (
			<table className="aircraft-carrier" title="Aircraft-Carrier">
				<tbody>
					<tr>
						<td className="ship-cell"></td>
					</tr>
					<tr>
						<td className="ship-cell"></td>
					</tr>
					<tr>
						<td className="ship-cell"></td>
					</tr>
					<tr>
						<td className="ship-cell"></td>
					</tr>
					<tr>
						<td className="ship-cell"></td>
					</tr>
					<tr>
						<td className="amount"> x{this.props.data.userPieces.aircraftCarrier.piecesLeft}</td>
					</tr>
				</tbody>
			</table>
		)
	}
})