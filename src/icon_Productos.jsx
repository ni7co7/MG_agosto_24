import React from 'react'
import { Link } from 'react-router-dom'
import './icon_Productos.css'
/* import { toCapital } from '../helpers/toCapital' */

const icon_Productos = ( ) => {
    
    
  return (
    <div className='productos1'>
        <div className="producto1">
            <img src="https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png" alt="icono minimalista de autoCad" />
            <div>
                 <h3>2D Drawing</h3>
                 <p>
                    Layout Plan
                    Structure
                    
                 </p>
                 <Link className="ver-mas1" >more</Link>
            </div>
        </div>
    
        <div className="producto1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ujnihDRAdDb_GZtE8wpakeqwlr0tjyE2Ow&usqp=CAU" alt="icono minimalista de SketchUp" />
            <div>
                <h3>Transcribe {/* your */} {/* Plans */}</h3>
                <p>Electrical Installation|
                   {/*  2D plains, */} </p>
                {/* <p>Categoría: </p>  */}
                <Link className="ver-mas1" >more</Link>
            </div>
        </div>
    
        <div className="producto1">
            <img src="https://cdn3.iconfinder.com/data/icons/blue-collar-jobs-1/100/12-512.png" alt="icono minimalista de autoCad" />
            <div>
                <h3>Quick Viewing {/* with  */}{/* D5 Render */}</h3>
                <p>Fast rendering{/* . Digital Modeling */}</p>
                
                {/* <p>Categoría: </p>  */}
                <Link className="ver-mas1" >more</Link>
            </div>
        </div>
    </div>
  )
}

export default icon_Productos