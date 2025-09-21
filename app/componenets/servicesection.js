import Link from "next/link";
import Image from "next/image";

export default function ServiceSection({
  title,
  description,
  imageUrl,
  height = 400,
  marginBottom = 50,
  onOpenGallery
}) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: `${height}px`,
        marginBottom: `${marginBottom}px`,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        zIndex: 1,
      }}
    >
      {/* تصویر زمینه */}
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        priority
        quality={80}
      />

      {/* پوشش نیمه شفاف */}
      <div style={overlayStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={descStyle}>{description}</p>

        <div style={buttonContainer}>
          <button
            style={{ ...buttonStyle, ...primaryButton }}
            onClick={onOpenGallery}
          >
            مشاهده گالری
          </button>

          <Link
            href={`/reservation?service=${encodeURIComponent(title)}`}
            passHref
          >
            <button style={{ ...buttonStyle, ...secondaryButton }}>
              رزرو وقت
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "20px",
  boxSizing: "border-box",
  zIndex: 2, // روی تصویر باشه
};

const titleStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#fff",
  marginBottom: "20px",
};

const descStyle = {
  fontSize: "18px",
  color: "#fff",
  lineHeight: "1.5",
  marginBottom: "30px",
};

const buttonContainer = {
  display: "flex",
  gap: "15px",
};

const buttonStyle = {
  padding: "12px 25px",
  fontSize: "16px",
  fontWeight: "600",
  borderRadius: "30px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const primaryButton = {
  background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
  color: "#fff",
};

const secondaryButton = {
  background: "rgba(255,255,255,0.9)",
  color: "#333",
};
