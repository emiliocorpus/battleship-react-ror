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
						<td className="amount">x{this.props.data.destroyerAmount}</td>
					</tr>
				</tbody>
			</table>
		)
	}
})