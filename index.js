const playhistory = "StreamingHistory0.json"

function getJSONData (url){
    let result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}



addEventListener('DOMContentLoaded', (event) => {
    getJSONData(playhistory).then(function(resultObj){
        if (resultObj.status === "ok"){
            let array = resultObj.data
            console.log(array.length)
         showhistory(array)
        }
})})

function showhistory(array){
    let play = "";
    for(let i = 0; i < array.length; i++){
        let list = array[i];
        play += `
         <tr>
            <td data-th="artist">
         <p> ${list.artistName}</p>
         `
         document.getElementById("playhistory").innerHTML=play
        // }  
        // console.log(play)
    }

    }