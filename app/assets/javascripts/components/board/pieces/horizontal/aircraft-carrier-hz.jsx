var AircraftCarrierHz = React.createClass({
	render:function(){
		return (
			<table className="aircraft-carrier" title="Aircraft-Carrier">
				<tbody>
					<tr>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="amount"> x{this.props.amountLeft}</td>
					</tr>
				</tbody>
			</table>
		)
	}
})