import React ,{Component} from 'react'

import {Link} from 'react-router'


class Footer extends Component{
	constructor(props){
		super(props)
		this.state = {
			navs: [
				{id:1,text:"首页",icon:'\ue722',path:'/home'},
				{id:2,text:"发现",icon:'\ue67a',path:'/catch'},
				{id:3,text:"订单",icon:'\ue606',path:'/order'},
				{id:4,text:"我的",icon:'\ue658',path:'/mine'}
			]
		}
	}
	
	render(){
		let {navs} = this.state
		let {pathname} = this.props
		return(
			<div className="footer">
				{
					navs.map((item)=>(
						<Link className={pathname.startsWith(item.path)?'active':''} to={item.path} key={item.id}>
							<i className="iconfont">{item.icon}</i>
							<span>{item.text}</span>
						</Link>
					))
				}
			</div>
		)
	}
}

export default Footer
