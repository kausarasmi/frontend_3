// let url="https://ipinfo.io/122.161.87.155/geo"
async function getip(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data.ip)
}
let url="https://ipinfo.io/182.69.176.12?token=daa750382ff98a"
window.addEventListener("load", (event) => {
    // console.log("page is fully loaded");
    // const response =fetch(url)
    // var data =  response.json();
    // console.log(data.ip)
    async function getip(url){
        const response = await fetch(url);
        var data = await response.json();
        
        console.log(data)
        document.getElementById('ip1').innerHTML=data.ip
        document.getElementById('Lat').innerHTML=data.loc
        document.getElementById('Long').innerHTML=data.loc
        document.getElementById('City').innerHTML=data.city
        document.getElementById('Region').innerHTML=data.region
        document.getElementById('Country').innerHTML=data.country
        document.getElementById('Organization').innerHTML=data.org
        document.getElementById('Hostname').innerHTML=data.hostname
        document.getElementById('Timezone').innerHTML=data.timezone
        document.getElementById('Pincode').innerHTML=data.postal
        document.getElementById('Message').innerHTML=data.ip
        document.getElementById('Filter').innerHTML=data.ip
        var param = data.loc
        // var script = document.createElement("iframe");
        // script.src = "https://maps.google.com/maps?q='+param+'&hl=es&z=14&amp;output=embed"
        // document.getElementsByTagName("iframe")[0].parentNode.appendChild(iframe);
        // document.getElementById('myIframe').src = "https://maps.google.com/maps?q="+param+"&hl=es&z=14&amp;output=embed"
    }
    getip(url)
  });