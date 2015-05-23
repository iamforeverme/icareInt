define([ "jquery", 'AppManager'], function($, am) {
    function iCareSystem(baseURL,  catalog) {
        var app_manager   = null;  
        var _baseURL      = baseURL;

        /** Returns the application manager of the Opsis system */
        this.AppManager = function() {
            return app_manager;
        };

        /** Returns the base URL at which the underlying system services are running */
        this.getBaseURL = function() {
        	return _baseURL;
        };
        
        app_manager   = new am.AppManager(this, catalog);
       
    }

    return {
        'iCareSystem' : iCareSystem
    };
});
