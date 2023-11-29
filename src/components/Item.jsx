import React from 'react'
import PropTypes from 'prop-types'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export const Item = ({item, taskIndex, cardIndex, taskUpdate}) => {

    const handleClick = (e) => {
        taskUpdate(taskIndex, cardIndex, e.target.id)
    }

  return (
    <div className='item'>
        <GrPrevious onClick={handleClick} id="prev"/>
        <p>{item}</p>
        <GrNext onClick={handleClick} id="next" />
    </div>
  )
}

Item.propTypes = {
    item: PropTypes.string,
    cardIndex: PropTypes.integer,
    taskIndex: PropTypes.integer,
    taskUpdate: PropTypes.func,
};

