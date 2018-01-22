import React ,{Component} from 'react'


import Header from '../header'
import Footer from '../footer'

class Order extends Component{
	constructor(props){
		super(props)
		
	}
	
	render(){
		let {pathname} = this.props.location
		
		return(
			<div className="order">
				<Header text="订单" />
				
				
				
				
				
				
				
				
				<Footer pathname={pathname}/>
				
			</div>
		)
	}
}

export default Order
