class CartService{

    constructor(){ }

    addPhone( phone ) {

        let cart = this.getCart();

        if(cart.length === 0){

            localStorage.setItem('cart' , JSON.stringify([
                {
                    id: phone.id,
                    amount: 1,
                    name: phone.name
                }
            ]));

        }
        else{

            let phoneCheck = cart.find(
                p => p.id === phone.id
            );

            if( !phoneCheck ){

                cart.push(
                    {
                        id: phone.id,
                        amount: 1,
                        name: phone.name
                    }
                );

                localStorage.setItem('cart' , JSON.stringify( cart ));

            }

        }

    }

    getCart(){

        try{
            let cart = JSON.parse(
                localStorage.getItem('cart')
            );
            return cart || [];
        }
        catch(ex){
            console.log('EXCEPTION!' , ex);
            return [];
        }

    }

    isInCart( id ){
        let cart = this.getCart();

        return cart.find( p => p.id === id );
    }

    removePhone( id ){

        let newCart = this.getCart().filter( p => p.id !== id );

        localStorage.setItem('cart' , JSON.stringify(newCart) );

    }

}

export default CartService;