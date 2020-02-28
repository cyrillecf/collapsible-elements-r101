import React, {Component} from 'react';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';

class Collapsible extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      isExpanded: false,
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e){
    e.preventDefault();
    //console.log(this.refs.inner.clientHeight);
    this.setState({
      isExpanded: !this.state.isExpanded,
      height: this.refs.inner.clientHeight
    })
  }

  render(){
    const {title, children} = this.props;
    const {isExpanded, height} = this.state;
    const currentHeight = isExpanded ? height : 0;

    return(
      <div className={`panel ${isExpanded ? 'is-expanded' : '' }`} onClick={this.handleToggle} >
        <div className="panel-heading">
          <h2>{title}</h2>
        </div>
        <hr/>
        <div className="panel-collapse" style={{height: currentHeight+'px'}}>
          <div className="panel-body" ref="inner" >
            {children}
          </div>
        </div>
      </div>
    );
  }

}

Collapse.protoTypes = {
  title: PropTypes.string,
}

export default Collapsible;