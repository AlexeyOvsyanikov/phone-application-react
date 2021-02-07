import React from 'react';
import PhoneComponent from "../Phone/Phone";
import PhoneWrapperController from "../Phone/PhoneWrapperController";

import PhoneService from '../../services/PhoneService';

class PhoneListComponent extends React.Component{

    constructor( props ){

        super(props);

        this.PhoneService = new PhoneService();
        this.LoadPhonesFromServer = this.LoadPhonesFromServer.bind(this);

    }

    async LoadPhonesFromServer(){
        let response = await this.PhoneService.GetPhones('phones/phones.json');

        this.props.onLoadPhonesSuccess( response );
    }

    componentDidMount() {
        this.LoadPhonesFromServer();
    }

    render(){

        const { phones } = this.props;

        const phonesHTML = phones.map( phone =>
            <PhoneWrapperController key = {phone.id} phone={phone} />
        );

        return (
            <ul className='phones'>
                {phones.length === 0 ? <h2>Phones not found!</h2> : phonesHTML}
            </ul>
        );

    }

}

export default PhoneListComponent;