import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selection} from '../reducers'

class Detail extends Component {

constructor(props){
  super(props)

  
}

componentDidMount(){


}


  render() {

   

    return (
      <div>
         asXDAS  {this.props.data}
      </div>
    );
  }
}

const mapStateToProps = (selection) => {
    return{
      data : selection.data
    }
};

export default connect(mapStateToProps,null)(Detail);
