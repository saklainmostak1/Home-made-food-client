import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ViewPic = () => {
    return (
        <div>
            <h2>Image view</h2>
            <PhotoProvider>
                <PhotoView src=''>
                    <img src='' alt="" />
                </PhotoView>
            </PhotoProvider>
        </div>
    );
};

export default ViewPic;