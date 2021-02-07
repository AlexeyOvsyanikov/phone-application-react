import React from 'react';
import CartService from "../../services/CartService";

class SearchComponent extends React.Component{

     onGetCart( event ){
        let cart =  this.CartService.getCart();

        this.props.onLoadCartSuccess( cart );
    }

    componentDidMount() {
        this.onGetCart();
    }

    removeFromCart(id){

         this.CartService.removePhone(id);
         let cart = this.CartService.getCart();
         this.props.onRemoveInSuccess(cart);

    }

    constructor( props ){

        super(props);

        this.onGetCart = this.onGetCart.bind(this);

        this.CartService  = new CartService();

    }

    render(){
        const { cart } = this.props;

        let items = cart.map( p =>
            <li key={p.id}>{p.name} ({p.amount}) <span style={
                {
                    color: 'red',
                    cursor: 'pointer'
                }
            }
             onClick={this.removeFromCart.bind( this , p.id)}

            >X</span></li>
        );

        if( items.length === 0 ){
            items = <span>Empty cart!</span>;
        }
        
        return (
            <section>
                <p>Shopping Cart</p>
                <ul>
                    {items}
                </ul>
            </section>
        )

    }

}

export default SearchComponent;