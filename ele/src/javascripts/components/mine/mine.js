import React ,{Component} from 'react'

import Header from '../header'
import Footer from '../footer'

class Mine extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		let {pathname} = this.props.location
		
		return(
			<div>
				<Header text="我的" />
			
			
			
			
			
			
			
			<Footer pathname={pathname}/>
			
			</div>
		)
	}
}

export default Mine
