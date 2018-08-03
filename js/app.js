const button = $('#search-button');
const input = $('#inp');
const container = $('#pokemon-container');
let pokemonName;

$(document).ready(function(){
    button.click(function(element){
        element.preventDefault();
        pokemonName = input.val();
        console.log(pokemonName);

        pokemonFinder(pokemonName);
    });

    /*Function to search the pokemons data*/

    function pokemonFinder(pokemonName){
        $.ajax({
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
        

    }
});
      