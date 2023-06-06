// import React, { useState, useEffect } from 'react';
// import './style.css';

// const TextInput = () => {
//   const targetText = 'f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f ff ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff f ff'
//   const [inputText, setInputText] = useState('');

//   const validKey = (keyCode) => {
//     return keyIsNumber(keyCode) || 
//     keyIsUpperKey(keyCode) || 
//     keyIsLowerKer(keyCode) || 
//     keyIsAvalibeSymbole(keyCode)
//   }

//   const keyIsNumber = (keyCode) => {
//         return keyCode >= 48 && keyCode <= 57
//   }

//   const keyIsUpperKey = (keyCode) => {
//         return keyCode >= 65 && keyCode <= 90
//   }

//   const keyIsLowerKer = (keyCode) => {
//         return keyCode >= 97 && keyCode <= 122
//   }

//   const keyIsAvalibeSymbole = (keyCode) => {
//         return [13, 32].includes(keyCode)
//   }

//   const handleInputChange = (event) => {
//     if (validKey(event.keyCode)) {
//       setInputText((prev) => prev + event.key); 
//     } else if (event.keyCode === 8) {
//       setInputText((prev) => prev.slice(0, -1))
//     }  
import React from 'react';
import './style.css';

const TextInput = ({ inputText = "", targetText = "" }) => {
  const inputLength = inputText.length; //pocet znaku v retezci
  const targetChars = targetText.split(''); //pole znaku

  return (
    <div>
      {targetChars.map((char, index) => {
        const className = index < inputLength
          ? (char === inputText.charAt(index) ? 'letter right' : 'letter wrong')
          : 'letter';

        return <span key={index} className={className}>{char}</span>
      })}
    </div>
  );
};

export default TextInput;


//   };

//   useEffect(() => {
//     document.addEventListener('keydown', handleInputChange);
//   }, []);

//   const renderText = () => {
//     const targetChars = targetText.split('');
//     const inputChars = inputText.split('');
  
//     return targetChars.map((char, index) => {
//       if (index < inputText.length) {
//         return <span key={index} className={char === inputChars[index] ? 'letter right' : 'letter wrong'}>{char}</span>
//       } 
//       return <span key={index} className='letter'>{char}</span>
       
//     });
//   };

//   return (
//     <>
//       <div>{renderText()}</div>
//     </>
//   );

// };

// export default TextInput;