define([],function() {
	
    /**
	 * Application context
	 */
	function AppContext( appDescriptor, id ) {
	    var _appDescriptor = appDescriptor;
		var system = null;
		var _id           = id;
		
		this.getAppDescriptor    = function() {
			return _appDescriptor;
		};
        
        /** Inject the opsis system to be used by this app context */
        this.setSystem = function( system ) {
        	system = system;
        };
        
        /** Returns the associated Opsis system */
        this.getSystem = function() {
        	return system;
        }
        
        /** Returns the unique id of this running application */
        this.getId = function() {
        	return _id;
        }
	}
	
    /** Initialize app hook */
    AppContext.prototype.initApp = function() {
		console.log("Starting app");      
    };
		
	return { 'AppContext' : AppContext };
});
