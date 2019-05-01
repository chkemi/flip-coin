import React from 'react';

const Coin = (props) => {
    return ( 
        props.side
        ? <img className={props.flipping ? 'flipping' : ''} src='https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg' alt='Heads' />
        : <img className={props.flipping ? 'flipping' : ''} src='http://www.pcgscoinfacts.com/UserImages/71009269r.jpg' alt='Tails' />
     );
}
 
export default Coin;