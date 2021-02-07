import React from 'react';
import { connect } from 'react-redux';
import PhoneListComponent from "./PhoneList";

import {
    LoadPhonesActionCreator
} from '../../store/PhoneList/actions';

class PhoneListWrapperComponent extends React.Component{

    constructor( props ){
        super(props);
    }

    render(){

        const {
            phones,
            loadPhonesSuccess
        } = this.props;

        return (
            <PhoneListComponent
                phones={phones}
                onLoadPhonesSuccess={loadPhonesSuccess}
            />
        );
    }

}

const mapStateToProps = ( state )=>{
    return {
        phones: state.phone.phones
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadPhonesSuccess: ( phones ) => {
            dispatch(LoadPhonesActionCreator( phones ))
        }
    };
};


export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(PhoneListWrapperComponent);