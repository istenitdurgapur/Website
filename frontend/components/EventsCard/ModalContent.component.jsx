import React, { forwardRef } from "react";
import s from "./Modal.styles.module.scss";

const ModalContent = forwardRef(({ cardInfo, close }, ref) => {
 console.log(cardInfo);
  return (
    <div className="modal-content-container" ref={ref}>
      <div className={s.closeButton}>
        <button onClick={close}>&#10005;</button>
      </div>
      <h1 className={`${s.title} ${s.firstTitle}`}> {cardInfo.title} </h1>
      <div className={s.container}>
        <div className={s.image}>
          <img src={cardInfo.img} alt={cardInfo.title} />
        </div>
        <div className={s.description}>
        <h1 className={`${s.title} ${s.secondTitle}`}> {cardInfo.title} </h1>
          <p>{cardInfo.description}</p>
          <hr className={s.hr} />
          <div className={s.details}>
            <h3 className={s.registration} >Event Timeline :- </h3>
            <h3>Start :- {cardInfo.startDate}</h3>
            <h3>End :- {cardInfo.endDate}</h3>
            <button className={s.eventButton} > <a href={cardInfo.link} > Go To Event </a> </button>
          </div>
        </div>
      </div>
    </div>
  );
});

ModalContent.displayName = "ModalContent";

export default ModalContent;
