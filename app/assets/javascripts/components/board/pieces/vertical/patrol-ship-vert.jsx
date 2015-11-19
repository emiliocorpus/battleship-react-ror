var PatrolShipVert = React.createClass({
	render:function(){
		return (
			<table className="patrol-ship" title="Patrol Ship">
				<tbody>
					<tr>
						<td className="ship-cell"></td>
					</tr>
					<tr>
						<td className="ship-cell"></td>
					</tr>
					<tr>
						<td className="amount">x{this.props.data.patrolShipAmount}</td>
					</tr>
				</tbody>
			</table>
		)
	}
})