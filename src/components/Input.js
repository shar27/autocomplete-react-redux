
import React from 'react'
import {useState, useEffect} from 'react'

function Input() {
  
   
  const [Loading, setLoading] = useState(false)
  const [name, setName] = useState('');
  const [options, setOptions] = useState([])
  const [data, setData] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    const newUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
       .then((res) => res.json())
       .then((data)=> {
         setData(data)
       });
        
    };

    newUsers();
  }, [])
  console.log(data);
  
  const handleChange = (name) => {
  let userMatch = [];
    if (name.length > 0) {
    userMatch = data.filter(usr => {
      const regex = new RegExp(`${name}`, "gi")
      return usr.name.match(regex)
    })
  }
  setOptions(userMatch)
  console.log(userMatch);
    setName(name)
    
  }  

  const handleOptions =  (name) => {
    setName(name)
    setOptions([])
  }
 
  if(!Loading) return <p className='text-center font-bold text-6xl'>No data</p>
  if (!data) return <p className='text-center font-bold text-6xl'>Loading...</p>
 

    return (
    <div>
    <div className='flex justify-center mt-10'>
        <input id="input" className='w-96  h-16 border-1 shadow-lg rounded-lg' placeholder="Search..."
       
        onChange={e=> handleChange(e.target.value)}
        value={name}
          />
       
            </div>
           
        { options?.map((op) => (
          <div onClick={()=> handleOptions(op.name)}  className=' bg-white hover:bg-slate-400 shadow-2xl border-2 flex justify-center'>
            Did you mean? {op.name}
          </div>
          
        ))}
          
    </div>
  );
    }

export default Input