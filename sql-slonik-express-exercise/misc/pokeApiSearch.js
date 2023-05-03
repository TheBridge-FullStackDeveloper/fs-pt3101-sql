//Ejercicio 12

module.exports = async (name) => {
    try {
        const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

        const response = await fetch(URL);

        const pokemon = await response.json();
        
        return pokemon;
    } catch (error) {
        return{
            ok: false,
            message: error.message
        }
    }
}
