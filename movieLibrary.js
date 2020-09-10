"use strict"
function pageLoad(){
    $.ajax({
        url: `http://www.devcodecampmusiclibrary.com/api/music`, 
        dataType: "json",
        type: "get",
        success: function(data, textStatus, jQxhr){
            $("#tableRow").append(`<td>${data[0].title}</td>`),
            $("#tableRow").append(`<td>${data[0].album}</td>`),
            $("#tableRow").append(`<td>${data[0].artist}</td>`),
            $("#tableRow").append(`<td>${data[0].genre}</td>`)                               
        },
        error: function(jqXhr, textStatus, errorThrown){
            console.log(errorThrown);
        } 
    });
}

pageLoad();