import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMelee } from '../../rtk/slices/MeleeSlice';


export default function Melee() {
    const dispatch = useDispatch();
    const Melee = useSelector((state) => state.Melee);
  
  
    useEffect(() => {
      dispatch(fetchMelee());
    }, []);
  return (
        <div className='d-flex flex-wrap'>
        {Melee.map((Melee, key) => {
    return (
        <div className='img-text-weapon' key={key}>
                <img className='img-weapon' src={Melee.img_weapons} alt={Melee.title} />
                <h6 className="text-center"> {Melee.title}</h6>
          
        </div>
    );
    })}
    </div>
  )
}
