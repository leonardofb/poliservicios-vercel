import React from 'react';
import styles from './VideoSelection.module.css';

const VideoSection = () => {
  return (
    <section className={styles.videoSection} id="video">
      <div className="container">
        <div className={styles.index5}>
          <div className={`${styles.abpageContent} text-center py-5 my-lg-5`}>
            <div className="position-relative py-5 my-lg-5">
              {/* Video centrado con controles */}
              <video controls className={styles.video}>
              <source src="/videos/mivideo.mp4" type="video/mp4" />

                Tu navegador no soporta este formato de video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;


