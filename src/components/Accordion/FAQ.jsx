import React from 'react';
import { QuestionsData } from './QuestionsData';
import Accordion from './Accordion';
import './Accordion.css';

function FAQ() {
    return (
        <section className="faq">
            <div className="container">
                <div className="section-title">
                    <h2 className='hr-lines'>F.A.Q</h2>
                    <p>Frequently Asked Questions</p>
                </div>
                {QuestionsData.map((val) => {
                    return (
                        <Accordion data={val} />
                    )
                })}
            </div>
        </section>
    )
}

export default FAQ;
