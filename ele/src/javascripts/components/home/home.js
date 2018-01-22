import React,{Component} from 'react'


import Footer from '../footer'


class Home extends Component{
	constructor(props){
		super(props)
	}
	
	
	
	
	render(){
		let {pathname} = this.props.location
		console.log(this.props)
		return(
			<div className="home">
				<div className="home-header">
				123
				</div>
			
			
			
			
				<Footer pathname={pathname}/>
			
			</div>
		)
	}
}

export default Home