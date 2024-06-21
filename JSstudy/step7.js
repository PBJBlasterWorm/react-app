const API_URL = "https://pokemon-project-api-hbin12212.vercel.app/main";

const getGreenPokemon = async () => {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const PokemonData = data.data;
        const greenPokemon = PokemonData.filter(item => item.color === 'green');
        console.log(greenPokemon)
        return greenPokemon;
    } catch (error) {
        console.log("api값이 잘못 전달되었습니다.", error);
    }
};

// 데이터 가져오기 및 콘솔에 출력
const greenData = async () => {
    const greenPokemonData = await getGreenPokemon();
    console.log(greenPokemonData);
}

greenData();
