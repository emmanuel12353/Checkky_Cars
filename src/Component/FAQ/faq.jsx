import React, { useState } from 'react';
import './faq.css'


const faqs = [{
    "question": "Bigender",
    "answers": "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc"
  }, {
    "question": "Female",
    "answers": "sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci"
  }, {
    "question": "Female",
    "answers": "est lacinia nisi venenatis tristique fusce congue diam id ornare"
  }, {
    "question": "Female",
    "answers": "cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis"
  }, {
    "question": "Female",
    "answers": "vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus"
  }]

function Faq() {


    const [Accordion, setActiveAccordion] = useState(-1);

    function toggleAccordion(index) {
        if(index === accordion){
            setActiveAccordion(-1);
            return
        }
        setActiveAccordion(index);
    }
  return (
    <div id='faq'>
     <div className='accordion'>
      <span className=''></span>
      <h1></h1>

      <div className='accordion_faq'>
       {faqs.map((item, index) =>
         <div key={index} onClick= {()=> toggleAccordion(index)} >
            <div className='accordion__faq-heading'>
                <h3 className={accordion === index ? "active accord": "accord" } >{item.question}</h3>
            </div>
            <div className=''>
                {accordion=== index ? (
                    <>
                 <span className='vertical'>-</span>
                 </>
                ): (
                    <>
                 <span className='vertical'>-</span>
                 </>
                )
                }
                   
                </div>
                <div>
                   <p className={accordion === index ? "active": "inactive"} >{item.answers}</p>
                    </div>
            </div>
       )}

      </div>

     </div>
    </div>
  );
}

export default Faq;
