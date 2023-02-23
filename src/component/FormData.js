import React, { useState } from 'react'

const FormData = () => {
  const [EmpData,setEmpData]=useState({
  Id:"",
  name:"",
  address:"",
  Mobail:""
})



   const getdata=(e)=>{
    console.log(e)
  const name=e.target.name;
  const value =e.target.value
  setEmpData({...EmpData,[name]:value})
   }
  const SubmitData=(e)=>{
    e.preventDefault();
    console.log(EmpData)
    }
  
  return (
    <div className=''style={{textAlign:"center"}}>
      <form onSubmit={SubmitData} >
        <div>
        Id <input type="text" name='Id' value={EmpData.Id} onChange={(e)=>getdata(e)}/>
        </div>
        <div>
        name <input type="text" name='name' value={EmpData.name} onChange={(e)=>getdata(e)}/>
        </div>
        <div>
        address <input type="text" name='address' value={EmpData.address} onChange={(e)=>getdata(e)}/>
        </div>
        <div>
        Mobail <input type="text" name='Mobail' value={EmpData.Mobail} onChange={(e)=>getdata(e)}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FormData
