import React ,{Component} from 'react'

import Header from '../header'
import Footer from '../footer'

class Catch extends Component{
	constructor(props){
		super(props)
		
	}
	
	render(){
		let {pathname} = this.props.location
		
		return(
			<div className="catch">
				<Header text="发现" />
				
				
				
				
				
				
				<Footer pathname={pathname}/>
				
			</div>
		)
	}
}

export default Catch
