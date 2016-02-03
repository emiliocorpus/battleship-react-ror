var CurrentGame = React.createClass({


	render:function(){
		return (
			<div>
				<div className="inline-block">
					<Board idType="computer-board-container"   board={this.props.data.computerBoard} />
				</div>

				<div className="inline-block">
					<Board idType="user-board-container"   board={this.props.data.board.grid}/>
				</div>
			</div>
		)
	}

})