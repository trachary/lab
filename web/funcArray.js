/*
 * File: funcArray.js
 * Name: Zachary Liou
 * Date created: 2016 July 27
 * Description: JS file for lab for misc. testing
 */


 (function() {
    "use strict";
    
    var array = [
        function() {
            console.log("a");
        },
        function() {
            console.log("b");
        },
        function() {
            console.log("c");
        },
        function() {
            console.log("d");
        }
    ];

    for (var i = 0; i < array.length; ++i) {
        array[i].call();
    }
    console.log("done");
 
 })();
