import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchShotguns } from '../../rtk/slices/ShotgunsSlice';


export default function Shotguns() {
    const dispatch = useDispatch();
    const Shotguns = useSelector((state) => state.Shotguns);
  
  
    useEffect(() => {
      dispatch(fetchShotguns());
    }, []);
  return (
        <div className='d-flex flex-wrap'>
        {Shotguns.map((Shotguns, key) => {
    return (
        <div className='img-text-weapon' key={key}>
            
                <img className='img-weapon' src={Shotguns.img_weapons} alt={Shotguns.title} />
                <h6 className="text-center"> {Shotguns.title}</h6>
          
        </div>
    );
    })}
    </div>
  )
}
