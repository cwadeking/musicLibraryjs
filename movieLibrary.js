"use strict"
function pageLoad(){
    $.ajax({
        url: `http://www.devcodecampmusiclibrary.com/api/music`, 
        dataType: "json",
        type: "get",
        success: function(data, textStatus, jQxhr){
        
            for(let element = 0; element < data.length; element++){
                    $("table").append(`<tr>
                                    <td>${data[element].title}</td>
                                    <td>${data[element].album}</td>
                                    <td>${data[element].artist}</td>
                                    <td>${data[element].genre}</td>
                                    <td>${data[element].releaseDate}</td>
                                </tr>`)
                

            }
        },
        error: function(jqXhr, textStatus, errorThrown){
            console.log(errorThrown);
        } 
    });
}

pageLoad();