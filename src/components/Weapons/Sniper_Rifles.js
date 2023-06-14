import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSniper_Rifles } from '../../rtk/slices/Sniper_RiflesSlice';


export default function SniperRifles() {
    const dispatch = useDispatch();
    const SniperRifles = useSelector((state) => state.SniperRifles);
  
  
    useEffect(() => {
      dispatch(fetchSniper_Rifles());
    }, []);
  return (
        <div className='d-flex flex-wrap'>
        {SniperRifles.map((SniperRifles, key) => {
    return (
        <div className='img-text-weapon' key={key}>
            
                <img className='img-weapon' src={SniperRifles.img_weapons} alt={SniperRifles.title} />
                <h6 className="text-center"> {SniperRifles.title}</h6>
          
        </div>
    );
    })}
    </div>
  )
}
