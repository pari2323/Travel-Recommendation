const search_Input= document.getElementById("destinationSearch");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
searchBtn.addEventListener("click",search);
const displayContainer = document.getElementById("displayContainer");
const displayContainer1 = document.getElementById("displayContainer1");
function search(){
    debugger;
    let searchInput = search_Input.value.toLocaleLowerCase();
    console.log(searchInput);
    
fetch("travel_recommendation_api.json")
.then(response => {
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json()
})

.then(data =>{
    // validation function for serachInput
    console.log(data);
   
    
    if (searchInput!= ""){

                if( searchInput.endsWith("s")){
                    searchInput = searchInput.slice(0, -1);     
                } else if(searchInput.endsWith("es")){
                    searchInput = searchInput.slice(0,-2);                 
                }
        
                if (searchInput === "countri" || searchInput == "country"){
                    searchInput = "country";
                }
                   
        }
    switch(searchInput){
        case "country":
            displayContainer.innerHTML = `
            <img src=${data.travel_rec[0][searchInput][0].cities[0].imageUrl}>
            <h3>${data.travel_rec[0][searchInput][0].cities[0].name}  </h3>
            <p>${data.travel_rec[0][searchInput][0].cities[0].description}</p>
            `;
            displayContainer1.innerHTML =`
            <img src=${data.travel_rec[0][searchInput][0].cities[1].imageUrl}>
            <h3>${data.travel_rec[0][searchInput][0].cities[1].name}  </h3>
            <p>${data.travel_rec[0][searchInput][0].cities[1].description}</p>
            `;
        break;

        case "temple" :
            displayContainer.innerHTML = `
            <img src= ${data.travel_rec[0][searchInput][0].imageUrl}>
            <h3>${data.travel_rec[0][searchInput][0].name}</h3>
            <p>${data.travel_rec[0][searchInput][0].description}</p>
            `;
            displayContainer1.innerHTML =`
            <img src= ${data.travel_rec[0][searchInput][1].imageUrl}>
            <h3>${data.travel_rec[0][searchInput][1].name}</h3>
            <p>${data.travel_rec[0][searchInput][1].description}</p>
            `;
        break;

        case "beach" :
            displayContainer.innerHTML = `
            <img src= ${data.travel_rec[0][searchInput][0].imageUrl}>
            <h3>${data.travel_rec[0][searchInput][0].name}</h3>
            <p>${data.travel_rec[0][searchInput][0].description}</p>
            `;
            displayContainer1.innerHTML =`
            <img src= ${data.travel_rec[0][searchInput][1].imageUrl}>
            <h3>${data.travel_rec[0][searchInput][1].name}</h3>
            <p>${data.travel_rec[0][searchInput][1].description}</p>
            `;
        break;
        default:
            console.log("There is some error in the code")
        break ;
        }

        search_Input.value = "";
    } )
   
    
}

clearBtn.addEventListener('click',function(){
    displayContainer.innerHTML = "";
    displayContainer1.innerHTML = "" ;
})

