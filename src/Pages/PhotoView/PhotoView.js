import React from 'react';
import {PhotoProvider, PhotoView } from 'react-photo-view'


const PhotoView = () => {
    return (
        <div>
            <PhotoProvider>
      <div className="foo">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img src={item} alt="" />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
        </div>
    );
};

export default PhotoView;