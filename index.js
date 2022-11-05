/**
1st Method
  const Text= fetch(API)
  Text.then((res)=>res.json())
  .then((data)=>{console.log(data)})
2nd Method
    fetch('data.txt')
  .then((res)=>{console.log(res)})
 */
const API= 'https://jsonplaceholder.typicode.com/users';

//! Method-1
const method_1=  ()=>{
  console.log('text')
  const Text= fetch('data.txt')
  Text.then((res)=>res.text())
  .then((data)=>{console.log(data)})
}
document.getElementById('text_btn_1').addEventListener('click', method_1);

//!Method-2
const method_2=  ()=>{
  fetch('data.txt')
  .then((res)=>res.text())
  .then((data)=>{console.log(data)})
}
document.getElementById('text_btn_2').addEventListener('click', method_2);

// ! Error Handeling in Fetch
const method_3=  ()=>{
  fetch('data1.txt')
  .then((res)=>{
    if(!res.ok){
      // console.log(res.statusText)
      throw Error(res.statusText)
    }
    return res.text()
  })
  .then((data)=>{console.log(data)})
  .catch((error)=>console.log(error))
}
document.getElementById('text_btn_3').addEventListener('click', method_3);

// ! Print Error 
const method_4=  ()=>{
  fetch('data.txt')
  .then((res)=>{
    if(!res.ok){
      throw Error(res.statusText)
    }
    return res.text()
  })
  .then((data)=>{
    document.getElementById('print').innerText=data;
  })
  .catch((error)=>console.log(error))
}
document.getElementById('text_btn_4').addEventListener('click', method_4);


//!=========Async and Await Methods=============


const async_1 = async ()=>{
  console.log('async Clicked')
  const data= await fetch('data.txt');
  const finalData= await data.text()
  console.log(finalData)
}
document.getElementById('async_1').addEventListener('click', async_1);

//! Error Handeling
const async_2 = async ()=>{
  try {
    console.log('async Clicked')
  const data= await fetch('data1.txt');
  if(!data.ok){
    throw Error(data.statusText)
  }
  const finalData= await data.text()
  console.log(finalData)
  } catch (error) {
    console.log(error)
  }
}
document.getElementById('async_2').addEventListener('click', async_2);


//! Error Handeling
const async_3 = async ()=>{
  try {
    console.log('async Clicked')
  const data= await fetch('data.txt');
  if(!data.ok){
    throw Error(data.statusText)
  }
  const finalData= await data.text()
  document.getElementById('print2').innerText=finalData;

  } catch (error) {
    console.log(error)
  } 
}
document.getElementById('async_3').addEventListener('click', async_3);