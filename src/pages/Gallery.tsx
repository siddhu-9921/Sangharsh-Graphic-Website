import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Gallery() {

  const { category } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://your-backend.onrender.com/api/images/${category}`)
      .then(res => res.json())
      .then(data => {
        console.log("Images:", data);
        setImages(data);
      })
      .catch(err => console.log(err));
  }, [category]);

  return (
    <div style={{ padding: "40px" }}>

      <h2>{category}</h2>

      {images.length === 0 ? (
        <p>No images found</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px"
        }}>

          {images.map((img) => (
            <img
              key={img._id}
              src={`https://my-backend-warq.onrender.com/uploads/${encodeURIComponent(img.filename)}`}
              style={{ width: "100%" }}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default Gallery;