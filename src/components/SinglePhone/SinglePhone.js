import React from "react";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import PhoneService from "../../services/PhoneService";
import CartService from "../../services/CartService";

import {
    AddInCartActionCreator
} from '../../store/Phone/actions';

class SinglePhoneComponent extends React.Component{

    constructor( { match , props} ) {
        super(props);

        this.phoneService = new PhoneService(); 
        this.cartService = new CartService(); 
        
        console.log( 'PROPS: ' , props );

        this.state = {
            phone: {},
            image: ''
        };

        this.phoneService
            .GetPhones(`/phones/${match.params.id}.json`)
            .then( this.loadPhone.bind ( this ) );
    }

    loadPhone( phone ){
        this.setState(
            { 
                phone , 
                image: phone.images[0] , 
                added: this.cartService.isInCart(phone.id)
            } 
        );
    }

    changeImage(image){
        this.setState({ ...this.state, image });
    }

    addPhone(){

        this.cartService.addPhone(this.state.phone);

        let cart = this.cartService.getCart();

        this.props.addInCartSuccess(cart);

    }

    render(){

        const { phone , image } = this.state;
        
        if( phone.name ) {

            return (
                <div>
                    <img className="phone" src={image} />

                    <Link to="/">
                        <button>Back</button>
                    </Link>

                    <button style={{marginLeft: '10px' , display: this.cartService.isInCart(phone.id) ? 'none' : ''}} onClick={() => this.addPhone()}>Add to basket</button>

                    <h1>{phone.name}</h1>

                    <p>{phone.description}</p>
                    <ul className="phone-thumbs">
                        {
                            phone.images.map( (img , index) => <li onClick={ () => this.changeImage(img) } key={index} ><img src={img} /></li> )
                        }
                    </ul>
                </div>
            );    

        }

        return (
            <span></span>
        );
    }

}


const mapStateToProps = ( state )=>{

    return {
        cart: state.cart.cart
    };

};

const mapDispatchToProps = dispatch => {
    return {
        addInCartSuccess: ( phones ) => {
            dispatch( AddInCartActionCreator( phones ))
        },
    };
};

export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(SinglePhoneComponent);

// export default SinglePhoneComponent;