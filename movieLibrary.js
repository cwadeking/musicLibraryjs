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

var newArray = [];
$(document).click(function(){
    $( "#searchBar" ).keypress(function() {
        $.ajax({
            url: `http://www.devcodecampmusiclibrary.com/api/music`, 
            dataType: "json",
            type: "get",
            success: function(data, textStatus, jQxhr){
                var searchBoxInput = $("#searchBar").val();
                
                
                for(let element = 0; element < data.length; element++){
                    if(data[element].title.includes(searchBoxInput)){ //|| data[element].album.includes(searchBoxInput) 
                    // || data[element].artist.includes(searchBoxInput) || data[element].genre.includes(searchBoxInput) 
                    // || data[element].releaseDate.includes(searchBoxInput)){
                        newArray.push(data[element]);
                    }
                    if(newArray.length === 0){
                        pageLoad();
                    }
                }
                $("td").empty();

                for(let i = 0; i < newArray.length; i++){
                    $("table").append(`<tr>
                                        <td>${newArray[i].title}</td>
                                        <td>${newArray[i].album}</td>
                                        <td>${newArray[i].artist}</td>
                                        <td>${newArray[i].genre}</td>
                                        <td>${newArray[i].releaseDate}</td>
                                    </tr>`)
                    
                }
        },
            error: function(jqXhr, textStatus, errorThrown){
                console.log(errorThrown);
            } 
        });
      });

});

pageLoad();