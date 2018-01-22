import React, {Component} from 'react'

class Header extends Component{
	render(){
		let {text} = this.props
		return(
			<div className="header">
				<p className="left "><i className="fa fa-angle-left"></i></p>
				<h2 className="center">{text}</h2>
			</div>
		)
	}
}

export default Header 