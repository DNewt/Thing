import React from "react";
import { connect } from 'react-redux'
import {confirm_shop} from "../actions/carts";

class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {name: "shirt", cost: 50, quantity: 2},
                {name: "shorts", cost: 75, quantity: 1},
                {name: "dress", cost: 125, quantity: 3}
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.confirm_shop(this.state.items)

        

    }

    render() {
        return (
            <div id="cart" className="content">
                <button onClick = {this.handleClick}> Send </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      confirm_shop: (items) => dispatch(confirm_shop(items))
    };
};

export default connect(null, mapDispatchToProps)(Cart);
