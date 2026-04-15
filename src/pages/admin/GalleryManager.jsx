import React, { useEffect, useState } from "react";
import { Image, Trash2 } from "lucide-react";

const categories = [
  "Modern Business Cards",
  "Corporate Letterheads",
  "Social Media Graphics",
  "Political Campaign Banners",
  "Custom Logo Designs",
  "Product Packaging",
  "Bill Book Designs",
  "Flex Printing Projects"
];

function GalleryManager() {

  // ✅ default category selected
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {

    if (!selectedCategory) return;

    fetch(
      `https://my-backend-warq.onrender.com/api/upload?category=${encodeURIComponent(
        selectedCategory
      )}`
    )
      .then((res) => res.json())
      .then((data) => setImages(data));

  }, [selectedCategory]);

  const deleteImage = async (id) => {

    const confirmDelete = window.confirm("Delete this image permanently?");

    if (!confirmDelete) return;

    try {

      const res = await fetch(`https://my-backend-warq.onrender.com/api/upload/${id}`, {
        method: "DELETE"
      });

      if (res.ok) {

        setImages(prev =>
          prev.filter(img => img._id !== id)
        );

      }

    } catch (error) {

      console.error("Delete error:", error);

    }

  };

  return (
    <>
      <style>{`

      .gallery-page{
        padding:30px;
      }

      /* ✅ Same header style as Clients page */

      .page-title{
        display:flex;
        align-items:center;
        gap:10px;
        font-size:26px;
        font-weight:600;
        color:#2f6b3c;
        margin-bottom:20px;
      }

      .category-buttons{
        margin-bottom:25px;
      }

      .category-buttons button{
        margin:6px;
        padding:8px 15px;
        border:none;
        border-radius:20px;
        background:#eee;
        cursor:pointer;
      }

      .category-buttons button.active{
        background:#2e7d32;
        color:white;
      }

      .gallery-grid{
        display:grid;
        grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
        gap:15px;
      }

      .image-card{
        position:relative;
        height:200px;
        overflow:hidden;
        border-radius:10px;
        cursor:pointer;
        box-shadow:0 3px 8px rgba(0,0,0,0.15);
      }

      .image-card img{
        width:100%;
        height:100%;
        object-fit:cover;
        transition:0.3s;
      }

      .image-card:hover img{
        transform:scale(1.1);
      }

      .delete-btn{
        position:absolute;
        top:8px;
        right:8px;
        background:red;
        border:none;
        color:white;
        padding:5px;
        border-radius:50%;
        cursor:pointer;
      }

      .fullscreen{
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.9);
        display:flex;
        justify-content:center;
        align-items:center;
        z-index:1000;
      }

      .fullscreen img{
        max-width:90%;
        max-height:90%;
      }

      `}</style>

      <div className="gallery-page">

        {/* ✅ New header format */}
        <div className="page-title">
          <Image size={26} />
          Gallery Manager
        </div>

        {/* CATEGORY FILTER */}
        <div className="category-buttons">

          {categories.map((cat, index) => (
            <button
              key={index}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* IMAGE GRID */}
        <div className="gallery-grid">

          {images.map(img => (
            <div
              key={img._id}
              className="image-card"
              onClick={() => setSelectedImage(img)}
            >

              <img src={img.url} alt="design" />

              <button
                className="delete-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteImage(img._id);
                }}
              >
                <Trash2 size={14} />
              </button>

            </div>
          ))}

        </div>

        {/* FULLSCREEN VIEW */}
        {selectedImage && (
          <div
            className="fullscreen"
            onClick={() => setSelectedImage(null)}
          >

            <img
              src={selectedImage.url} 
              alt="preview"
            />

          </div>
        )}

      </div>
    </>
  );
}

export default GalleryManager;