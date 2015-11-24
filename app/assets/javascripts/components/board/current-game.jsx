var CurrentGame = React.createClass({


	render:function(){
		return (
			<div>
				<Board idType="computer-board-container"   board={this.props.data.hitCheckBoard} />
				<br />
				<Board idType="user-board-container"   board={this.props.data.board.grid}/>
			</div>
		)
	}

})