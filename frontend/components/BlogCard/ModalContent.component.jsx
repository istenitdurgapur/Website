import React, { forwardRef } from "react";
import s from "./Modal.styles.module.scss";

const ModalContent = forwardRef(({ cardInfo, close }, ref) => {
  // console.log(cardInfo);
  return (
    <div className="modal-content-container" ref={ref}>
      <div className={s.closeButton}>
        <button onClick={close}>&#10005;</button>
      </div>
      <div className={`${s.title} ${s.firstTitle}`}>
        <h1> {cardInfo.title} </h1>
        <div className={s.headDetails}>
          <h3>{cardInfo.startDate}</h3>
          {/* <h3> - </h3>
          <h3> {cardInfo.endDate}</h3> */}
        </div>
      </div>
      <div className={s.container}>
        <div className={s.image}>
          <img src={cardInfo.img} alt={cardInfo.title} />
        </div>
        <div className={s.description}>
          <div className={`${s.title} ${s.secondTitle}`}>
            <h1> {cardInfo.title} </h1>
            <div className={s.headDetails}>
              <h3>{cardInfo.startDate}</h3>
              {/* <h3> - </h3>
              <h3> {cardInfo.endDate}</h3> */}
            </div>
          </div>
          <div className={s.short_info}>{cardInfo.short_info}</div>
          <p>{cardInfo.description}</p>
          <hr className={s.hr} />

          {/* <div className={s.details}>
            <h3 className={s.registration} >Event Timeline :- </h3>
            <h3>Start :- {cardInfo.startDate}</h3>
            <h3>End :- {cardInfo.endDate}</h3>
            <button className={s.eventButton} > <a href={cardInfo.link} > Go To Event </a> </button>
          </div> */}
          
          {cardInfo.link ? (
            <button className={s.eventButton}>
              <a href={cardInfo.link}> Read More </a>
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
});

ModalContent.displayName = "ModalContent";

export default ModalContent;
