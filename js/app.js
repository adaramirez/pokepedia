const button = $('#search-button');
const input = $('#inp');
const container = $('#pokemon-container');
let pokemonName;

/*Adding function to button when you click it*/
$(document).ready(function(){
    button.click(function(element){
        element.preventDefault();
        pokemonName = input.val();
        console.log(pokemonName);

        pokemonFinder(pokemonName);
    });

    /*Function to search the pokemons data*/

    function pokemonFinder(pokemonName){
        $.ajax({ /* Asynchronous JavaScript And XML */
            url: 'https://pokeapi.co/api/v2/pokemon/' + `${pokemonName}`,
            type: 'GET',
            datatype: 'json',
        })
        .done(function(response){
            const showData = (response);
            console.log(response);
            pokemonsInfo(showData);
        })
        .fail(function(){
            console.log('error')
        });

    }

    function pokemonsInfo(pokemonsInfo){
        console.log(pokemonsInfo);
        var pokemonImage = pokemonsInfo.sprites.front_female;
        console.log(pokemonImage);
        var pokemonName = pokemonsInfo.name;
        console.log(pokemonName);
        var abilities = pokemonsInfo.abilities;
        console.log(abilities);
        var types = pokemonsInfo.types;
        console.log(types);
        var height = pokemonName.height;
        console.log(height);
        var weight = pokemonsInfo.weight;
        console.log(weight);

        $("#pokemon-container").append(patternCreation(pokemonImage, pokemonName));
    }

    function patternCreation(pokemonImage, pokemonName){
        var pattern = '<ul id="bottom-pokemon-info">'+
            '<li><img src=" ' + pokemonImage + ' "></li>'+
            '<li>Name:' + pokemonName +'</li>'+
            '</ul>';
        return pattern;

    }
    
});



      
