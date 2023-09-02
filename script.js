
var ip;




async function searchIp(){
    
  ip=document.getElementById('ipInput').value
 const response=fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_0fuK1VHv9Z1ChUM6WUEVaHSk4d3Nm&ipAddress=${ip}&domain=${ip}`)
const data = await (await response).json()
var pos=data.location
loadMap(pos.lat,pos.lng);
loadInfo(data.ip,pos.city,pos.timezone,data.isp);

console.log(data);
console.log(ip);


}

function loadInfo(ip,loc,tim,isp){
    conts=`
    <div id="info">IP ADDRESS
    <p>${ip}</p>
  </div> 
  <div id="info">LOCATION
    <p>${loc}</p>

  </div> 
  <div id="info">TIMEZONE
    <p>${tim}</p>

  </div> 
  <div id="info">ISP
    <p>${isp}</p>`
    document.getElementById('info_card').insertAdjacentHTML("afterbegin",conts);
}
    
    document.getElementById('ipInput').addEventListener('keyup',(event)=>{
        if(event.key=='Backspace'){
            window.location.reload();
        }


    })


function loadMap(lat,lng){
    var map = L.map('map').setView([lat,lng], 13);
    var marker = L.marker([lat,lng]).addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}