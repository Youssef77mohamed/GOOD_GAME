import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGrenades } from '../../rtk/slices/GrenadesSlice';


export default function Grenades() {
    const dispatch = useDispatch();
    const Grenades = useSelector((state) => state.Grenades);
  
  
    useEffect(() => {
      dispatch(fetchGrenades());
    }, []);
  return (
        <div className='d-flex flex-wrap'>
        {Grenades.map((Grenades, key) => {
    return (
        <div className='img-text-weapon' key={key}>
                <img className='img-weapon' src={Grenades.img_weapons} alt={Grenades.title} />
                <h6 className="text-center"> {Grenades.title}</h6>
          
        </div>
    );
    })}
    </div>
  )
}
