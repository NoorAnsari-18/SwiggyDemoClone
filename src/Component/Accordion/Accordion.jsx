import React, { useState } from 'react';

function Accordion({ props, children }) {
  debugger
  console.log(props);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <div onClick={toggleAccordion} style={styles.accordionHeader} className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between'>
        <span className='font-bold text-lg'>{props.title}({props.itemCards.length})</span>
        {/* Conditional rendering of the arrow */}
        <span style={styles.arrow}>
          {isOpen ? '↑' : '↓'}
        </span>
      </div>
      {isOpen && (
        <div style={styles.accordionContent}>
          {children}
        </div>
      )}
    </div>
  );
}

const styles = {
  // accordion: {
  //   border: '1px solid #ccc',
  //   borderRadius: '5px',
  //   marginBottom: '10px',
  //   width: '90%',
  // },
  // accordionHeader: {
  //   backgroundColor: '#f1f1f1',
  //   padding: '10px',
  //   cursor: 'pointer',
  //   fontWeight: 'bold',
  //   display: 'flex',        // Flexbox to align title and arrow
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  arrow: {
    marginLeft: '10px',     // Adds space between the title and the arrow
    fontSize: '16px',
  },
  accordionContent: {
    padding: '10px',
    backgroundColor: '#fafafa',
  },
};

export default Accordion;
