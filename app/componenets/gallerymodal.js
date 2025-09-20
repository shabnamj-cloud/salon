"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function GalleryModal({ images, onClose }) {
  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={closeBtn}>
          ✕
        </button>

        {Array.isArray(images) && images.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            style={{ width: "100%", height: "100%" }}
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`slide-${idx}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px"
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p style={{ textAlign: "center", padding: "20px", color: "#333" }}>
            هیچ عکسی برای این خدمت ثبت نشده است.
          </p>
        )}
      </div>
    </div>
  );
}

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000
};

const modalContent = {
  width: "80%",
  height: "80%",
  background: "#fff",
  borderRadius: "12px",
  position: "relative",
  overflow: "hidden"
};

const closeBtn = {
  position: "absolute",
  top: "15px",
  right: "15px",
  zIndex: 9999,
  background: "red",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
