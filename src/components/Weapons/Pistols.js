import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPistols } from '../../rtk/slices/PistolsSlice';


export default function Pistols() {
    const dispatch = useDispatch();
    const Pistols = useSelector((state) => state.Pistols);
  
  
    useEffect(() => {
      dispatch(fetchPistols());
    }, []);
  return (
        <div className='d-flex flex-wrap'>
        {Pistols.map((Pistols, key) => {
    return (
        <div className='img-text-weapon' key={key}>
            
                <img className='img-weapon' src={Pistols.img_weapons} alt={Pistols.title} />
                <h6 className="text-center"> {Pistols.title}</h6>
          
        </div>
    );
    })}
    </div>
  )
}
