/*
    Resources:
    https://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/
    http://blog.andlabs.org/2010/12/performing-ddos-attacks-with-html5.html
    
    Should probably implement the well known hash table collision
    http://1337day.com/exploit/17321
    http://www.nruns.com/_downloads/advisory28122011.pdf
*/

var url = "http://foobar.com/"

if( XMLHttpRequest ){
    var request = new XMLHttpRequest();
    if("withCredentials" in request){
        request.open('GET', url, true);
        request.onreadystatechange = handler;
        request.setRequestHeader( 'X-PINGOTHER', 'pingpong' );
        request.setRequestHeader( 'Content-Type', 'application/xml' );
    } else if (XDomainRequest) {
        var request = new XDomainRequest();
        request.open( "get", url );
    }

    if( request ) {
        request.send();
    }
}
