import React from 'react'

const EmployeeFrom = () => {
  return (
    <div style={{textAlign:"center" }}>
        <div>
      <h1>Add Employee</h1>
    </div>
               
    <div>
        <form>
         <div>
            Id: 
            <input type="text" name=""/>
         </div>
         <div>
            name: 
            <input type="text" name=""/>
         </div>
         <div>
           last name: 
            <input type="text" name=""/>
         </div>
        </form>
    </div>
    </div>
    
  )
}

export default EmployeeFrom
