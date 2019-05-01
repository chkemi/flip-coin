import React from 'react';

const Coin = (props) => {
    return ( 
        props.side
        ? <img src='https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg' alt='Heads' />
        : <img src='http://www.pcgscoinfacts.com/UserImages/71009269r.jpg' alt='Tails' />
     );
}
 
export default Coin;