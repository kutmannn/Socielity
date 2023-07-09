import React from 'react';
import {NavLink} from "react-router-dom";

const Card = ({item}) => {
    return (
        <div className="card">
           <NavLink to={''}> <img className="card__img" src={item.img[0]} alt=""/></NavLink>
            <div className="card__bottom">
                <div className="card__bottom-left">
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__price">{item.price} $</p>
                </div>
                <div className="card__bottom-right">
                    <p className="card__bottom-right_desc">
                       Category : {item.category}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Card;