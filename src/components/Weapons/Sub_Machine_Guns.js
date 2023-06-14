import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSub_Machine_Guns } from '../../rtk/slices/Sub_Machine_GunsSlice ';


export default function Sub_Machine_Guns() {
    const dispatch = useDispatch();
    const Sub_Machine_Guns = useSelector((state) => state.Sub_Machine_Guns);
  
  
    useEffect(() => {
      dispatch(fetchSub_Machine_Guns());
    }, []);
  return (
        <div className='d-flex flex-wrap'>
        {Sub_Machine_Guns.map((Sub_Machine_Guns, key) => {
    return (
        <div className='img-text-weapon' key={key}>
                <img className='img-weapon' src={Sub_Machine_Guns.img_weapons} alt={Sub_Machine_Guns.title} />
                <h6 className="text-center"> {Sub_Machine_Guns.title}</h6>
          
        </div>
    );
    })}
    </div>
  )
}
