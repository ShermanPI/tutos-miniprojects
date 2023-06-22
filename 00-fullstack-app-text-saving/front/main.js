let form = document.getElementById('hola-form')


const getMessages = ()=>{
  fetch('http://localhost:5000/', {headers: {'Content-Type': 'text/plain'}})
  .then(res=> res.ok ? res.text() : new Promise.reject())
  .then(res => {
    const messageArrays = res.split('\n'),
      fragment = document.createDocumentFragment(),
      list = document.querySelector('.messages-list')
    
    messageArrays.pop() //removing the last \n

    messageArrays.forEach((message) => {
      const li = document.createElement('li')
      li.innerHTML = message 
      fragment.appendChild(li)
    });

    list.appendChild(fragment)
  })
  .catch(err=>console.error(err))
}

getMessages()

document.addEventListener('submit', (e)=>{
  e.preventDefault()
  
  if(e.target == form){
    fetch('http://localhost:5000/', 
    {method: 'POST',
    body: form.info.value.toString(),
    headers: {
      'Content-Type': 'text/plain'}
    })
  }
})