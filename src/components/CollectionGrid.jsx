import { useState } from 'react'
import Button from './Button'

const CollectionGrid = () => {
    const [activeButton , setActiveButton] = useState(0)
    const gridContainer = [
        {
            label:"Popular",
            cards :[
            { id:1 , collectImage :"https://cdn.pixabay.com/photo/2016/12/08/00/10/audi-1890687_640.jpg" , brand :"Audi A1" , amount :78.90},
            {id:2 , collectImage :"https://cdn.pixabay.com/photo/2019/10/06/18/49/mercedes-4530972_640.jpg" , brand :"Mercedes" , amount : 90.75},
            {id:3 , collectImage :"https://cdn.pixabay.com/photo/2020/01/26/09/41/ford-4794182_640.jpg" , brand :"Ford Ecosport SUV" , amount :"60.55"},
            {id:4 , collectImage :"https://cdn.pixabay.com/photo/2020/06/06/02/00/cadillac-escalade-5264975_640.jpg" , brand :"Cadillac Escalade Suv" , amount :"100.40"},
            {id:5 , collectImage :"https://cdn.pixabay.com/photo/2018/10/29/00/50/jeep-3780273_640.jpg" , brand :"Jeep Cherokee" , amount :"80.14"},
            {id:6 , collectImage :"https://cdn.pixabay.com/photo/2023/09/15/12/47/uaz-8254778_640.jpg" , brand :"Uaz SUV Jeep" , amount :"60.20"},
        ],
        },
          {
            label:"Luxury Car",
            cards :[
            { id:7 , collectImage :"" , brand :"Audi A8" , amount :""},
            {id:8, collectImage :"" , brand :"" , amount :""},
            {id:9 , collectImage :"" , brand :"" , amount :""},
            {id:10 , collectImage :"" , brand :"" , amount :""},
            {id:11 , collectImage :"" , brand :"" , amount :""},
            {id:12, collectImage :"" , brand :"" , amount :""},
        ],
        },
        
         {
            label:"Vintage",
            cards :[
            { id:13 , collectImage :"" , brand :"Audi A4" , amount :""},
            {id:14 , collectImage :"" , brand :"" , amount :""},
            {id:15 , collectImage :"" , brand :"" , amount :""},
            {id:16 , collectImage :"" , brand :"" , amount :""},
            {id:17 , collectImage :"" , brand :"" , amount :""},
            {id:18, collectImage :"" , brand :"" , amount :""},
        ],
        },
        {
            label:"Family Car",
            cards :[
            { id:19 , collectImage :"" , brand :"Audi A8" , amount :""},
            {id:20 , collectImage :"" , brand :"" , amount :""},
            {id:21 , collectImage :"" , brand :"" , amount :""},
            {id:22 , collectImage :"" , brand :"" , amount :""},
            {id:23 , collectImage :"" , brand :"" , amount :""},
            {id:24 , collectImage :"" , brand :"" , amount :""},
        ],
        },
         {
            label:"Off-Road Car",
            cards :[
            { id:25 , collectImage :"" , brand :"Audi A8" , amount :""},
            {id:26 , collectImage :"" , brand :"" , amount :""},
            {id:27 , collectImage :"" , brand :"" , amount :""},
            {id:28 , collectImage :"" , brand :"" , amount :""},
            {id:29 , collectImage :"" , brand :"" , amount :""},
            {id:30 , collectImage :"" , brand :"" , amount :""},
        ],
        },
    ];


  return (
    <div >
       <div className='popular-carNav'>
         {gridContainer.map((grid,idx)=>(
         <Button key={idx} onClick={ 
                () => setActiveButton(idx) 
            } 
                active={idx === activeButton }
                message={grid.label} >  
            </Button >
        ))}
       </div>
        <div className='collectionGrid'>
            {gridContainer[activeButton]?.cards.map((card)=>(
                <div key={card.id} className='collectionGridItem'>
                    <img src={card.collectImage} alt="" className='collectionImg' />
                    <span>{card.brand}</span>
                    <div>
                        <span className='fs-3 fw-bold'>{card.amount}</span><span>/day</span>
                    </div>
                    <div className="description">
                        <div className="desItem">
                            <i class="bi bi-speedometer"></i>
                            <span>4000</span>
                        </div>
                        <div className="desItem">
                            <i class="bi bi-gear"></i>
                            <span>Auto</span>
                        </div>
                        <div className="desItem">
                            <i class="bi bi-person"></i>
                            <span>4 Person</span>
                        </div>
                        <div className="desItem">
                            <i class="bi bi-ev-station"></i>
                            <span>Electric</span>
                        </div>
                    </div>
                    <button className='rentbtn'>Rent Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CollectionGrid