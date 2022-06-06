import React, { forwardRef } from "react";
import s from './Modal.styles.module.scss'

const ModalContent = forwardRef((props, ref) => {
  console.log(props);
  return (
    <div className="modal-content-container" ref={ref}>
      <div className={s.closeButton} >
        <button onClick={props.close}>
          &#10005;
        </button>
      </div>
      <h1 style={{textAlign : "center" , fontSize : "40px"}}> {props.cardInfo.title} </h1>
      <p style={{textAlign : "center"}} >{props.cardInfo.description}</p>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil neque
        explicabo deleniti, corrupti expedita repellendus aliquam fugit possimus
        eaque nostrum?
      </p>
      <p>
        Doloribus provident amet officiis in dolor voluptatum eligendi corrupti
        quibusdam enim eos repellendus nobis odit et aliquid quod, laboriosam
        harum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil neque
        explicabo deleniti, corrupti expedita repellendus aliquam fugit possimus
        eaque nostrum?
      </p>
      <p>
        Doloribus provident amet officiis in dolor voluptatum eligendi corrupti
        quibusdam enim eos repellendus nobis odit et aliquid quod, laboriosam
        harum!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil neque
        explicabo deleniti, corrupti expedita repellendus aliquam fugit possimus
        eaque nostrum?
      </p>
      <p>
        Doloribus provident amet officiis in dolor voluptatum eligendi corrupti
        quibusdam enim eos repellendus nobis odit et aliquid quod, laboriosam
        harum!
      </p> */}
      
    </div>
  );
});

ModalContent.displayName = 'ModalContent';

export default ModalContent;