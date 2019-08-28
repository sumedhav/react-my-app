import React, {Component} from 'react';
import './Accordion.css'


class Accordion extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isOpen: props.isOpen
        };
    }

    handleClick() {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <React.Fragment>
              <div className='accordion'>
                  <div className='accordion-header' onClick={this.handleClick}>{this.props.header}</div>
                  <div className={'accordion-body accordion-' + (this.state.isOpen ? 'open' : 'close')}>{this.props.children}</div>
              </div>
            </React.Fragment>
        )
    }
}

export default Accordion
