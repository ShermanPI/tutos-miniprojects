let form = document.getElementById('hola-form')
console.log("eo")
document.addEventListener('submit', (e)=>{
  e.preventDefault()
  
  if(e.target == form){
    fetch('http://localhost:5000/', 
    {method: 'POST',
    body: form.info.value,
    headers: {
      'Content-Type': 'text/plain'}
    })
    .then((res)=> res.ok? console.log("SE ENVIO"): console.log("no se envio ono"))
    console.log(form.info.value)
  }
})