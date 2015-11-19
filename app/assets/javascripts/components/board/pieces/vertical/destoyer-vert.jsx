var DestroyerVert = React.createClass({
	render:function(){
		return (
			<table className="destroyer" title="Destroyer">
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
						<td className="amount">x{this.props.amountLeft}</td>
					</tr>
				</tbody>
			</table>
		)
	}
})