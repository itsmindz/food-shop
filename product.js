import React from 'react';
import ReactDOM from 'react-dom';
import "./product.css";
import Navbar from './Navbar';

export default function product() {

const Plant=({img,name,price})=>{
    const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return(
      <article className="plant">
          <img src={url} />
          <h3>{name}</h3>
          <h4>Price :{price}</h4>
      </article>
    )
}
const PlantList=()=>{
    return(
      <section className="plant-list">
          <Plant img="1" name="Rubber Plant" price="790 Baht">
          </Plant>
          <Plant img="34" name="Fiddle Fig" price="390 Baht">
   
          </Plant>
          <Plant img="40" name="Queen of Dracaenas" price="790 Baht">
     
          </Plant>
          <Plant img="50" name="English Ivy" price="500 Baht">
  
          </Plant>
          <Plant img="1" name="Snake Plant" price="590 Baht">
 
          </Plant>
          <Plant img="34" name="Arrowhead Vine" price="890 Baht">
 
          </Plant>
          <Plant img="40" name="Peace Lily" price="390 Baht">

          </Plant>
          <Plant img="50" name="Urn Plant" price="490 Baht">
 
          </Plant>
      </section>
    )
}

    return (
      <Navbar/>
    )

}
