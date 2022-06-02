import React, { forwardRef } from "react";

const ModalContent = forwardRef((props, ref) => {
  console.log(props);
  return (
    <div className="modal-content-container" ref={ref}>
      <p>{props.cardInfo.description}</p>
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
      
    </div>
  );
});

ModalContent.displayName = 'ModalContent';

export default ModalContent;