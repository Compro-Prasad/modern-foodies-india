export class User {
	
    id: string;
	
	//authentication info
	phoneNo:string;
	
	// //location info
	Lat:any;
	Lng:any;
	
	//cook info
	cookName:string;
	isPro:boolean;
	isVeg:boolean;
	cuisines:Array<string>;

	isVerified:string;

	firstTime:boolean;

}