
const $ = require('jquery');
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"; //Change in the future for proprietary proxy implementation

export const METHODS = {
    GET : "GET",
    POST : "POST",
    PUT : "PUT",
    DELETE : "DELETE"
};

export const TECHNIQUES = {
    AJAX : "AJAX",
    JSONP : "JSONP",
    CORS : "CORS"
};

export const RESPONSE_TYPES = {
    JSON : "application/json",
    XML : "application/xml",
    TEXT : "text/plain"
};

const urlRequest = function(url, callback, options = {}){
    let method = options.method || METHODS.GET;
    const technique = options.technique || TECHNIQUES.AJAX;
    const responseType = options.responseType || RESPONSE_TYPES.TEXT;
    options.headers = options.headers || {};

    if(Object.values(TECHNIQUES).indexOf(technique) < 0){
        throw `Technique ${technique} is not supported`;
    }

    if(Object.values(METHODS).indexOf(method) < 0){
        throw `Method ${method} is not supported`;
    }

    if(Object.values(RESPONSE_TYPES).indexOf(responseType) < 0){
        throw `Response type ${responseType} is not supported`;
    }

    if(callback != null && typeof callback != "function"){
        throw "Callback must be a function";
    }

    if(technique == TECHNIQUES.CORS){
        if(options.withProxy) {

            if (!options.headers || !options.headers.origin) {
                throw "You must specify origin header for CORS request sent through a proxy";
            }

            console.warn("Changing request method to GET");
            method = METHODS.GET;

            const origin = options.headers.origin;
            delete options.headers.origin;
            options.headers["x-requested-with"] = origin;

            const proxy = options.proxy || CORS_PROXY;
            url = proxy + url;
        }

        const xhr = new XMLHttpRequest();

        if(callback){
            xhr.onload = function(){
                handleResponse(200, responseType, this.responseText, callback);
            };

            xhr.onerror = function(){
                callback({failureCode : -1, failureMessage : e});
            };

            xhr.onabort = function(){
                callback({failureCode : -1, failureMessage : e});
            };

            xhr.ontimeout = function(e){
                callback({failureCode : -1, failureMessage : e});
            } ;
        }

        xhr.open(method, url);

        xhr.timeout = options.timeout || xhr.timeout;

        for(let header in options.headers){
            xhr.setRequestHeader(header, options.headers[header]);
        }

        try {
            xhr.send(options.body);
        }catch (e){
            console.error("An error happened while attempting to make a cors request. Error : "  + e );
            if(callback){
                callback({failureCode : -1, failureMessage : e});
            }
        }

    } else {
        const config = {
            type : method,
            url : url,
            jsonp : technique === TECHNIQUES.JSONP,
            headers : options.headers
        }

        if(callback){
            config.success = function(data){
                handleResponse(200, responseType, data, callback );
            };
            config.error = function(xhr, error){
                callback({failureCode:xhr.status || -1, failureMessage : error});
            };
        }

        $.ajax(config);

    }

};

export default urlRequest;

function handleResponse(status, responseType, responseText, callback){

    if(status !== 200 ){
        callback({ failureCode : -1 , failureMessage : this.responseText });
        return;
    }

    switch (responseType){
        case RESPONSE_TYPES.JSON :
            processJSON(responseText, callback);
            break;
        case RESPONSE_TYPES.XML :
            processXML(responseText, callback);
            break;
        default :
            callback(null, this.responseText);
            break;
    }
}

function processJSON(responseText, callback){
    try {
        const jsonData = JSON.parse(responseText);
        callback(null, jsonData);
    } catch(e){
        console.error("An error happened while attempting to parse json response");
        callback({failureCode : -1, failureMessage : e});
    }
}

function processXML(responseText, callback){
    try {
        const parser = new DOMParser();
        const xmlData = parser.parseFromString(responseText);
        callback(null, xmlData);
    } catch(e){
        console.error("An error happened while attempting to parse xml response");
        callback({failureCode : -1, failureMessage : e});
    }
}