document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault();
    let input=document.querySelector('#searchInput').Value;
    if(input !=='')
    {
        clearInfo();
        shoWarning('carregando. . .')
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=ef60a79c9c3ca99f2edfad01fd9badb3&units=metric&lang=pt_br`

        let results=await fetch(url);
        let json=await results.json();

        if(json.cod===200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp:json.main.temp,
                tempIcon:json.weather[0].icon,
                windsSpeed:json.wind.speed,
                descri: json.weather[0].description,
            }
            );
        }
        else{
            clearInfo();
            shoWarning('Não encontramos essa localização');
        }
    }else{
        clearInfo();
    }
})
function shoWarning(json){
    shoWarning('');
    document.querySelector('.resultado').style.display='block';
    document.querySelector('.titulo').innerHTML=`${json.name},${json.country}`
    document.querySelector('.temperatura').innerHTML=`${json.temp}<sup>ºC</sup>`;
    document.querySelector('.ventoInfo').innerHTML=`${json.windspeed}<span>km/h<span>`;
    document.querySelector('tempInfo').innerHTML=`${json.descri}`;
    document.querySelector('informacoes img').setAttribute('src',`./img/${json.temIcon}.gif`);                                                                                 document.querySelector('.titulo').innerHTML=`${json.temp}<sup>`
}
function shoWarning(msg)
{
    document.querySelector('.aviso').innerHTML=msg
}
function clearInfo(){
    shoWarning('');
    document.querySelector('.resultado').style.display='none';
}
async function Curitiba(){
    let input = 'Curitiba'
    if(input!=='')
    {
        clearInfo();
        shoWarning('carregando. . .')

        let url= `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=ef60a79c9c3ca99f2edfad01fd9badb3&units=metric&lang=pt_br`
        let results= await fetch (url);
        let json=await results.json();
        if(json.cod===200){
            showInfo({
                name:jsom.name,
                country:json.sys.country,
                temp:json.main.temp,
                temIcon:json.weather[0].icon,
                windSpeed:json.wind.speed,
                descri:json.weather[0].description,
            }
            );
        }
        else{
            clearInfo();
            shoWarning('Não encontramos essa localização');
        }  
    }else{
        clearInfo();
    }
}

Curitiba();