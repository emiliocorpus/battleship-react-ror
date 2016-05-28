var TextBox = React.createClass({
	render:function() {
		var display;
		var coordinates = this.props.data.lastShotFired.coordinates
		var targetStatus = this.props.data.lastShotFired.targetStatus
		if (targetStatus !== null) {
			if (targetStatus === "hit") {
				var directt = <span><span className="coordinates">{coordinates}</span> is a <span className="green-font">direct</span> hit!</span>
				display = directt
			}
			else {
				var misss = <span><span className="coordinates">{coordinates}</span> is a <span className="red-font">miss</span>...</span>
				display = misss
			}
		}
		else {
			display = ""
		}
		return (
			<div className="text-box">
				{display} 
			</div>
		)
	}
})