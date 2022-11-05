console.log('Post DAta')



let API ='https://reqres.in/api/users'


//! Post using then promise
const postRequest1 =()=>{
  const myInit={
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:'{"name":"Preeti Krushna", "job":"Front-End Developer"}'
  }
  fetch('https://reqres.in/api/users',myInit)
  .then((res)=>{
    if(!res.ok){
      throw Error(res.statusText)
    }
    return res.json()
  })
  .then((data)=>console.log(data))
  .catch((error)=>console.log(error))
}

document.getElementById('postbtn').addEventListener('click', postRequest1);

//! post using async await
const postRequest2= async ()=>{
  try {
    const myInit={
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:'{"name":"Krushna", "job":"Full-Stack Developer"}'
    }
    console.log('DAta')
    const data =await fetch(API, myInit)
    const jsondata = await data.json()
    console.log(jsondata)
  } catch (error) {
    console.log(error);
  }
}
document.getElementById('postbtn_2').addEventListener('click', postRequest2);


//! Post usning async and await
const saveForm= async(e)=>{
  e.preventDefault()
  try {
  const Fname=document.getElementById('fname').value;
  const job=document.getElementById('job').value;
  const userData={
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:Fname, job:job})
    }
    console.log('Body:', userData.body)
  const data = await fetch(API, userData)
  if(!data.ok){
    throw Error(data.statusText)
  }
  const userdata= await data.json();
  console.log(userdata)
  } catch (error) {
    console.log(error)
  }
}
document.getElementById('formdata').addEventListener('click', saveForm);