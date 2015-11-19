var PatrolShipHz = React.createClass({
	render:function(){
		return (
			<table className="patrol-ship" title="Patrol Ship">
				<tbody>
					<tr>
						<td className="ship-cell"></td>
						<td className="ship-cell"></td>
						<td className="amount">x{this.props.data.patrolShipAmount}</td>
					</tr>
				</tbody>
			</table>
		)
	}
})