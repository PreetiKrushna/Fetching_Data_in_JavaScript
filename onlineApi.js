const Fetch_Data= async ()=>{
  try {
    const data= await fetch('data.json')
    console.log('DAta Fetch', data);
    if(!data.ok){
      throw Error(data.statusText)
    }
  const  jsondata = await(data.json())
  // const strdata = JSON.stringify(jsondata);
  document.getElementById('name').innerHTML=jsondata.name
  document.getElementById('job').innerHTML=jsondata.job
  } catch (error) {
    console.log(error)
  }
}

document.getElementById('api_fetch').addEventListener('click', Fetch_Data)