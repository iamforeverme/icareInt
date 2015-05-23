define([], function() {

    /**
     * Application descriptor
     */
    function iCareApp(title, href, urlParams, accesslevel) {
        var _title = title;
        var _href = href;
        var _urlParams = urlParams;
        var _accessLevel = accesslevel; // common user : 0, adv user : 1

        /** Returns the title of the application configuration */
        this.getTitle = function() {
            return _title;
        };
        
        /** Returns the title with no white spaces so it can be used as an id and part of an URL */
        this.getTitleId = function() {
        	    return _title.trim().replace(/\s+/g, '');
        };
        
        /** Returns the href of this application configuration */
        this.getHref = function() {
            return _href;
        };
        
        this.getUrlParams = function() {
            return _urlParams;
        };
        
        /** Returns whether this is a system application */
        this.getAccessLevel = function() {
            return _accessLevel;
        }
    }

    return {
        'iCareApp' : iCareApp
    };
});
