import React, { Component } from 'react';
import { Card, Icon, Avatar, Tooltip, Modal, Button } from 'antd';
import  './Feed.css'
import {feedSelected} from '../reducers'
import {connect} from 'react-redux'
import PropsTypes from 'prop-types'
import {Link} from 'react-router-dom'
import createHistory from "history/createBrowserHistory"



const { Meta } = Card;

class Feed extends Component {

constructor(props){
  super(props)

  this.state={
    like:false,
    dislike:false,
    love:false,
    data:[],
    open:false,
  }
  
}

componentDidMount(){

  var data = {
    title:this.props.title,
    desc:this.props.desc,
    user:this.props.user,
    avatar:this.props.avatar,
    up:this.props.up,
    down:this.props.down,
    cover:this.props.cover
  }

  this.setState({data})

}

onDetail = () =>{
  this.props.pushData(this.state.data)
  this.setState({open:true})
}
onClose = () =>{
  this.setState({open:false})
}
onLike = ()=>{this.setState({like:!this.state.like})}

onLove = ()=>{this.setState({love:!this.state.love})}

ondis = ()=>{this.setState({dislike:!this.state.dislike})}


  render() {

   

    return (
      <div>
        <div >
          <Card 
          
          hoverable={true}
          style={{ width: 300,margin:10,display:'block'}}
          cover={<img alt="example" src={this.props.cover} onClick={this.onDetail}/>}
          actions={
            [<div>{this.props.up}  {this.state.like?<Icon type="like" style={{color:'green'}} onClick={this.onLike}/>:<Icon type="like-o" onClick={this.onLike}/>}</div>,
            this.state.love?<Icon type="heart" style={{color:'red'}} onClick={this.onLove}/>:<Icon type="heart-o" onClick={this.onLove}/>,
            <div>{this.state.dislike?this.state.like?<Icon type="dislike-o" onClick={this.state.like?null:this.ondis} />:<Icon type="dislike" style={{color:'yellow'}} onClick={this.ondis}/>:<Icon type="dislike-o" onClick={this.state.like?null:this.ondis}/>}  {this.props.down}</div>]
            }>
          <Meta
            onClick={this.onDetail}
            avatar={<Tooltip title={this.props.user}><Avatar src={this.props.avatar===null?"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png":this.props.avatar} /></Tooltip>}
            title={this.props.title}
            description={<div className="desc">{this.props.desc}</div>}
          />
        </Card>


        </div>
        <Modal title={this.props.title} visible={this.state.open} closable={false} okText="Done"
        footer={<Button type="primary" label="Done" onClick={this.onClose}>Done</Button>}
        >
        <div>
          <img src={this.props.cover}  width="100%" />
          <p style={{margin:5}} >

            {this.props.desc}
          </p>


        </div>
        
        </Modal>
      </div>
    );
  }
}


Feed.propTypes = {
  dispatch: PropsTypes.func,
}


const mapDispatchToProps = (dispatch) => {
  return{
    pushData: data =>{
      dispatch(feedSelected(data))
    }
  }
}

export default connect(null,mapDispatchToProps)(Feed)
