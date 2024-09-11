import React from 'react'
import skills from "../components/data/skills.json"

const Skills = () => {
  return (
    <section id='skills'>
    <div className='container skills' >
      <h2 style={{fontSize:"50px",textAlign:"center"}}>Skills</h2>
        <div className=' skill_container'> <div  className="item">
            {
                  skills.map((data)=>
                { return(
                    <>

                        <div key={data.id} className="item">
                                 <img className="icon"src={`/assets/${data.imageSrc}`}/>
                                 <h3 className='title'>{data.title}</h3>
                        </div>
                   
                    

                    </>
                )
                    
                })
            }</div>
        </div>
      
    </div></section>
  )
}

export default Skills
