import React from 'react';

class SortComponent extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            value :'Newest'
        };

        this.SortTypeChanged = this.SortTypeChanged.bind(this);
    }

     SortTypeChanged(event){

         this.setState({
             value: event.target.value
         });

        let value  = event.target.value;

        let phones =  this.props.phones;

        if( value === 'Alphabetical' ){
            phones.sort( ( left , right )=>{
                return left.name > right.name ? 1 : -1;
            } );
        }
        else{
            phones.sort( ( left , right )=>{
                return +left.age > +right.age ? 1 : -1;
            } );
        }

        this.props.onSortPhonesSuccess( phones.slice() );

    }

    render(){

        return (
            <p>
                Sort by:
                <select
                    value={this.state.value}
                    onChange={this.SortTypeChanged}
                >
                    <option value="Newest">Newest</option>
                    <option value="Alphabetical">Alphabetical</option>

                </select>
            </p>
        )
    }
    
}

export default SortComponent;