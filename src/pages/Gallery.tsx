import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

function Gallery() {
  const { category } = useParams();
  const [images, setImages] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://my-backend-warq.onrender.com/api/images/${encodeURIComponent(category!)}`)
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.log(err));
  }, [category]);

  /* ======================
     KEYBOARD NAVIGATION
  ====================== */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev! + 1) % images.length);
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === 0 ? images.length - 1 : prev! - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images]);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev! + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev! - 1
    );
  };

  return (
    <div className="container py-10">

      {/* TITLE */}
      <div className="flex items-center justify-between mb-8 group">

        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="flex items-center gap-2 w-auto group-hover:bg-gradient-primary group-hover:text-white group-hover:border-transparent transition-all"
        >
          ← Back
        </Button>

        <h2 className="text-2xl font-semibold capitalize">
          {category}
        </h2>

        <div />
      </div>
      
      {/* GRID */}
      {images.length === 0 ? (
        <p className="text-center text-muted-foreground">No images found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={img._id}
              className="overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img.url}
                alt=""
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* CLOSE */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-5 right-6 text-white text-3xl hover:scale-110"
          >
            ✕
          </button>

          {/* LEFT */}
          <button
            onClick={prevImage}
            className="absolute left-5 text-white text-5xl px-3 py-1 rounded-full bg-black/40 hover:bg-black/70"
          >
            ❮
          </button>

          {/* IMAGE */}
          <img
            src={images[selectedIndex].url}
            alt=""
            className="max-w-[90%] max-h-[85%] rounded-xl shadow-2xl animate-fadeInUp"
          />

          {/* RIGHT */}
          <button
            onClick={nextImage}
            className="absolute right-5 text-white text-5xl px-3 py-1 rounded-full bg-black/40 hover:bg-black/70"
          >
            ❯
          </button>

        </div>
      )}
    </div>
  );
}

export default Gallery;