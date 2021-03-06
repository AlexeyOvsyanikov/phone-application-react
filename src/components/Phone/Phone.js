import React from 'react';
import { Link } from "react-router-dom";

import CartService from "../../services/CartService";


class PhoneComponent extends React.Component{

    constructor( props ){
        super(props);
        
        this.cartService = new CartService();
    }

    addPhone(){

        this.cartService.addPhone(this.props.phone);

        let cart = this.cartService.getCart();

        this.props.onAddInCart(cart);

    }

    render(){

        const { phone } = this.props;

        return (
            <li className="thumbnail">

                <Link to={phone.id} className="thumb">
                    <img alt="fail" src={phone.imageUrl} />
                </Link>


                {(

                    !this.cartService.isInCart(phone.id) && <div className="phones__btn-buy-wrapper">
                    <span className="btn btn-success" onClick={this.addPhone.bind(this)}>
                        Add
                    </span>
                    </div>

                )}

                <Link to={phone.id}>
                    {phone.name}
                </Link>

                <p>{phone.snippet}</p>

            </li>
        )

    }

}

export default PhoneComponent;