// base URL
const football = 'https://premier-league-standings1.p.rapidapi.com/';
const playerData =
    "https://livescore-sports.p.rapidapi.com/v1/competitions/player-statistics?stat_type=main&competition_id=65&locale=EN";



async function getTable() {

    let reqUrl = `${football}`;

    var response = await fetch(
        reqUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '281de91a79mshd538e044f8ffbc9p16cf8ejsn132bc40b66a3',
            'X-RapidAPI-Host': 'premier-league-standings1.p.rapidapi.com'
        }
    }
    );
    return await response.json();
}


async function getPlayer() {

    let reqUrl = `${playerData}`;

    console.log(reqUrl)
    var response = await fetch(
        reqUrl, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '281de91a79mshd538e044f8ffbc9p16cf8ejsn132bc40b66a3',
            'X-RapidAPI-Host': 'livescore-sports.p.rapidapi.com'
        }
    }
    );
    return await response.json();
}


module.exports = {
    getPlayer,
    getTable
}