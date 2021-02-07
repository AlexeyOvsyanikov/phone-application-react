
class PhoneService{

    async GetPhones( path ){

        try{

            let response = await fetch( path );

            response = await response.json();

            return response;

        }
        catch(ex){

            console.log('Exception!')
            return null;

        }

    }

}

export default PhoneService;