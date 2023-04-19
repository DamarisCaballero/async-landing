const API = 'https://youtube-mp36.p.rapidapi.com/dl'

const options = {
  method: 'GET',
  params: {id: 'UxxajLWwzqY', cut: '9'},
  headers: {
    'X-RapidAPI-Key': '806b2637c5msh3804afa9304bc82p14470ajsnd6d43d2757e0',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  }
};

async function fetchData(urlAPI){
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data;
}

    