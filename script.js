

const query = document.querySelector('.input');
const put = document.querySelector('.main');
const api = 'https://www.omdbapi.com/?apikey=6fcb2ffb&t=';


query.addEventListener('keyup' , function(){
  put.innerHTML = '';
  const f_query =  query.value;
const final_query =  api + f_query;
if (!f_query) {  
  return; 
}
    try {
      fetch(final_query).then((data_array)=>{
        return data_array.json();
      }).then((items)=>{
        console.log(items)
        
        const card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('align-items-start');
        card.innerHTML = `
        
        <img src="${items.Poster}" class="card-img-top img-fluid img-thumbnai p-2" alt="Poster">   
       
    <div class="card-body">    
    <h5 class="card-title">${items.Title} (${items.Year})</h5>
  </div>
        `;
        put.appendChild(card)
      })
     } catch (error) {
      console.log(error)
     }
  

})

const input = document.querySelector('.input');
input.addEventListener('focus', function() {
    input.style.width = '300px';
});
document.body.addEventListener('click', function(event) {
    if (!input.contains(event.target)) { 
        input.style.width = '200px'; 
    }
});
