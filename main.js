/*
    Resources:
    http://www.html5rocks.com/en/tutorials/workers/basics/
    http://stackoverflow.com/questions/5408406/web-workers-without-a-separate-javascript-file
    
    
*/

var maxWorkers = 16; // Seems to be the limit in Opera (which is the lowest found)

(function(global){
    var workers = [];
    for( var i = 0; i < maxWorkers; i++ ){
        workers[ i ] = new Worker( 'request.js' );
    }
}(this))
