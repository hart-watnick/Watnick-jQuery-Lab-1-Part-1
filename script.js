"use strict";

$(document).ready(() => {

$(".available").on("click", (event) => {
    $(".form").css("display", "flex");

    });
$(".exit-btn").on("click", (event) => {
    $(".form").css("display", "none");

    });

$(".exit-btn").on("mouseenter", (event) => {

    $(event.target).css("cursor" , "pointer");
    });   

$(".submit-btn").on("click", (event) => {
    $(".form").css("display", "none")

    // could not figure out :(
    $(".available")
        .addClass("reserved")
        .removeClass("");

    });

$(".available").on("mouseenter", (event) => {
    $(event.target).css("background-color", "#f9f9f9");
    $(event.target).css("cursor" , "pointer");

    });
    
$(".available").on("mouseout", (event)=> {
    $(event.target).css("background-color", "#CCC");

    });
    
// $(".available").on("click", (event)=> {
//     $(event.target)
//         .addClass("reserved")
//         .removeClass("available");

//     });
$(".reserved").on("mouseenter", (event) => {
    $(event.target).css("cursor", "not-allowed");

    });        

});    