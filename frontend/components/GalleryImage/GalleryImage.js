import React from 'react';
import s from "./GalleryImage.styles.module.css";

export function GalleryImage({ images }) {

    return (
        <>

            {images.map((data) => {
                return (         
                    <div className={s.image_container}>
                    <img className={s.gallery_image} src={data.Image} alt="Image" />
                    <div className={s.image_caption}>
                      <span className={s.image_name}>{data.eventName}</span>
                      <span className={s.image_date}>{data.imgDate.slice(0,12)}</span>
                    </div>
                  </div>
                )

            })}

        </>
    );
}
export default GalleryImage;





















