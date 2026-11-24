import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

const [userdata, setUserdata] = useState([])
const [page, setPage] = useState(1)

const getdata= async function(){
const promise= await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=30`)
setUserdata(promise.data)
}


useEffect(function(){
    getdata()
},[userdata])

 

let display=<h3 className='text-gray-400 text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading....</h3>

if(userdata.length>0){
display= userdata.map((el,idx)=>{
return( 
<div key={idx}>
    <a href={el.url} target='_blank'>
        <div  className='h-40 w-44 rounded-xl bg-white overflow-hidden'>

<img className='h-full w-full object-cover ' src={el.download_url} alt="" />


</div>
<h2 className='text-white'>{el.author}</h2>
    </a>
</div>    

)
})}



return (
<div className='bg-black max-h-fit w-screen'>

<div className=' flex h-[80%] flex-wrap gap-3 p-2'>{display}</div>

<div className='flex w-full rounded-xl items-end justify-center fixed bottom-0 left-0  gap-3'>

<button className='bg-yellow-700  p-1 px-2 rounded-lg m-3 cursor-pointer active:scale-95 ' onClick={()=>{ if(page>1){setUserdata([])
setPage(page-1)

}}} >prev {"<- "}
    
</button>

<h4 className='my-3 p-1 px-2 '>Page {page}</h4>

<button className='bg-yellow-700 p-1 px-2 rounded-lg m-3 cursor-pointer active:scale-95 ' onClick={()=>{setUserdata([])
    setPage(page+1)
    }} >next{"->"}</button>

</div>


</div>
)
}

export default App



