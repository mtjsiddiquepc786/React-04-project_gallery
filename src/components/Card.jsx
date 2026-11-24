import React from 'react'

const Card = (props) => {
  return (
    <div className='flex w-full rounded-xl items-end justify-center fixed bottom-0 left-0  gap-3'>

<button className='bg-yellow-700  p-1 px-2 rounded-lg m-3 cursor-pointer active:scale-95 ' onClick={()=>{ if({props.page}>1){setUserdata([])
setPage({props.page}-1)

}}} >prev {"<- "}

</button>

<h4 className='my-3 p-1 px-2 '>Page {props.page}</h4>

<button className='bg-yellow-700 p-1 px-2 rounded-lg m-3 cursor-pointer active:scale-95 ' onClick={()=>{setUserdata([])
    setPage({"props.page"}+1)
    }} >next{"->"}</button>

</div>
)
}

export default Card
