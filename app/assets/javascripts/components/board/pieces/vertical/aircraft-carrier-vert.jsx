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
						<td className="amount"> x{this.props.data.aircraftCarrierAmount}</td>
					</tr>
				</tbody>
			</table>
		)
	}
})