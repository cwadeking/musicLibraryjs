"use strict"
function pageLoad(){
    $.ajax({
        url: `http://www.devcodecampmusiclibrary.com/api/music`, 
        dataType: "json",
        type: "get",
        success: function(data, textStatus, jQxhr){
    
        },
        error: function(jqXhr, textStatus, errorThrown){
            console.log(errorThrown);
        } 
    });
}

pageLoad();