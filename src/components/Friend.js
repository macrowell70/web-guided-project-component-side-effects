import React from 'react';

const Friend = props => {
    return (
        <div className='friend'>
            {props.info.name}
            <button onClick={() => props.openDetails(props.info.id)}>
                {/**
                 * onClick={() => props.openDetails} => ABSOLUTELY NOTHING
                 * onClick={() => props.openDetails()}
                 * onClick={props.openDetails}
                 */}
                See details
            </button>
        </div>
  )
}

export default Friend;