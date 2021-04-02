import React from 'react';
import './footer.css';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        
        return <div className="turn">Player {this.props.turn}'s turn</div>
    
    }
}

export default Footer;
