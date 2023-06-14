import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAssaultRifles } from '../../rtk/slices/AssaultRiflesSlice';


export default function AssaultRifles() {
    const dispatch = useDispatch();
    const AssaultRifles = useSelector((state) => state.AssaultRifles);
  
  
    useEffect(() => {
      dispatch(fetchAssaultRifles());
    }, []);
  return (
        <div className='d-flex flex-wrap'>
        {AssaultRifles.map((AssaultRifles, key) => {
    return (
        <div className='img-text-weapon' key={key}>
     
            
                <img className='img-weapon' src={AssaultRifles.img_weapons} alt="" />
                <h6 className="text-center"> {AssaultRifles.title}</h6>
          
        </div>
    );
    })}
    </div>
  )
}
