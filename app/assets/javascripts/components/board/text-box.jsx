var TextBox = React.createClass({
	render:function() {
		var display;
		var coordinates = this.props.data.lastShotFired.coordinates
		var targetStatus = this.props.data.lastShotFired.targetStatus
		if (targetStatus !== null) {
			if (targetStatus === "hit") {
				display = coordinates + " is a direct hit!"
			}
			else {
				display = coordinates + "... is a miss sir..."
			}
		}
		else {
			display = ""
		}
		return (
			<div className="text-box debugger">
				{display}
			</div>
		)
	}
})