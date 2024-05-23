import React, { useState } from 'react';
import './Accordion.css';
function Accordion({ data }) {
    const [text, setText] = useState(false);
    const handleClick = () => {
        setText(!text);
    }

    return(
        <div>
            <ul className='faq-list'>
                <li>
                    <div className="question"><span onClick={() => { handleClick() }}>{text ? <i className="fa-sharp fa-solid fa-angle-up "></i> : <i className="fa-sharp fa-solid fa-angle-down "></i>}</span> {data.question} </div>
                    <div className='ans-list'>
                        {text && <p>{data.answer}
                        </p>}
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Accordion;
