define(["jquery","iCareSystem"],function($, iCareSystem) {
	
	function iCareSession() {
		var system  = null;
		
		/** Returns the associated system to this session */
		this.getSystem = function() {
			return system;
		};
		
		/** 
		 * Initialize the session with the system and plugin application catalogs. 
		 */
		this.initSession = function( baseURL, catalog ) {
			console.log("ICARE SESSION:  Initializing ....");
			system = new iCareSystem.iCareSystem( baseURL, catalog );
		};
	}
	
	return { 'iCareSession' : iCareSession };
});
