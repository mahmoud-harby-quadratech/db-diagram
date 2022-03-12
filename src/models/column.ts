import Preser from "../services/parser" ;

export default class column{

    data : string ;

    constructor( data : string ) {
        this.data = data ;
    }

    get args( ) {
        return Preser.GetColumndetails ( this.data );
    }

    get name( ) : string {
        return Preser.GetColumnNameFromString ( this.data ) ;
    }

    get type( ) : string {
        return this.args.type ;
    }

    get Null( ) : string {
        return this.args.Null === 'true' ? 'nullable' : 'not nullable' ;
    }

    get increment( ) : string {
        return this.args.increment === 'true' ? 'increment' : 'not increment' ;
    }

}