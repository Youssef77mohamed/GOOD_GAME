import React from 'react'
import "./Mercenaries.css"
import Annie from "../../../images/home/MERCENARIES/char-desperado-sp.jpg"
import Holly from "../../../images/home/MERCENARIES/char-sisterhood-bl.jpg"
import MAGNOLIA from "../../../images/home/MERCENARIES/char-blackmamba-bl.jpg"
import LEXY from "../../../images/home/MERCENARIES/char-wolf-bl.jpg"
import VIPERS from "../../../images/home/MERCENARIES/char-vipers-sp.jpg"
import ARCH_HONORARY from "../../../images/home/MERCENARIES/char-archhonorary-gr.jpg"
import DEAN from "../../../images/home/MERCENARIES/char-dean-bl.jpg"
import RONIN from "../../../images/home/MERCENARIES/char-ronin-gr.jpg"
import THOTH from "../../../images/home/MERCENARIES/char-thoth-bl.jpg"
import SFG from "../../../images/home/MERCENARIES/char-sfg-bl.jpg"
import SIA_SPECIAL from "../../../images/home/MERCENARIES/char-mossupreme-bl.jpg"


export default function Mercenaries() {
  return (
    <>
    <h1 className='what-is Mercenaries mt-5 fw-bold'>MERCENARIES</h1>
    <div className='d-style mt-5'>
        <div className='d-imgs1'>
        <div className='d-imgs2'> 
        <img className='w' src={Annie} alt='ANNIE'/>
            <span className='fw-bold'>ANNIE</span>
        </div>
        </div>

        <div className=' d-imgs1'>
        <div className='d-imgs2'>
        <img src={Holly} alt='HOLLY'/>
        <span className='fw-bold'>HOLLY</span>
        </div>
        </div>

        <div className=' d-imgs1'>
        <div className='d-imgs2'>
        <img src={MAGNOLIA  } alt='MAGNOLIA'/>
        <span className='fw-bold'>MAGNOLIA</span>
        </div>
        </div>
        
        <div className=' d-imgs1'>
        <div className='d-imgs2'>
        <img src={LEXY} alt='Lexy'/>
        <span className='fw-bold'>Lexy</span>
        </div>
        </div>

        <div className=' d-imgs1'>
        <div className='d-imgs2'>
        <img src={VIPERS} alt='VIPERS'/>
        <span className='fw-bold'>VIPERS</span>
        </div>
        </div>

        <div className=' d-imgs1'>
        <div className='d-imgs2'>
        <img src={ARCH_HONORARY} alt='ARCH HONORARY'/>
        <span className='fw-bold'>ARCH HONORARY</span>
        </div>
        </div>

        <div className=' d-imgs1'>
        <div className='d-imgs2'>
        <img src={DEAN} alt='DEAN'/>
        <span className='fw-bold'>DEAN</span>
        </div>
        </div>

     

        <div className=' d-imgs1'>
        <div className='d-imgs2'>
        <img src={RONIN} alt='RONIN'/>
        <span className='fw-bold'>RONIN</span>
        </div>
        </div>

        <div className=' d-imgs1'>
        <div className='d-imgs2'>
        <img src={THOTH} alt='THOTH'/>
        <span className='fw-bold'>THOTH</span>
        </div>
        </div>

        <div className=' d-imgs1'>
        <div className='d-imgs2'>
        <img src={SFG} alt='SFG'/>
        <span className='fw-bold'>SFG</span>
        </div>
        </div>

        <div className=' d-imgs1'>
        <div className='d-imgs2'>
        <img src={SIA_SPECIAL} alt='SIA-SPECIAL'/>
        <span className='fw-bold'>SIA-SPECIAL</span>
        </div>
        </div>
    </div>
    
    </>
  )
}
