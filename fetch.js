const API= 'https://jsonplaceholder.typicode.com/users';
const fetchData= async ()=>{
  try {
    console.log('Btn click')
    const data = await fetch(API)
    if(!data.ok){
      throw Error(data.status)
    }
    const users = await data.json()
    let setData = document.getElementById('userdiv');
    users.forEach(element => {
      setData.innerHTML += `
      <div class="col-3 shadow p-3 m-2">
          <h6>ID: ${element.id}</h6>
          <h2>Name: ${element.name}</h2>
          <p>Body: ${element.email}</p>
      </div>
      `    
    });
  } catch (error) {
    console.log(error)
  }
}
document.getElementById('fetchbtn').addEventListener('click', fetchData)
