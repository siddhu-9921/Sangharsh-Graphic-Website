import { useState } from "react";
import { Upload } from "lucide-react";

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

const FileManager = () => {

  const [category, setCategory] = useState("");
  const [files, setFiles] = useState([]);

  const handleUpload = async () => {

    if (!category || files.length === 0) {
      alert("Select category and images");
      return;
    }

    const formData = new FormData();

    formData.append("category", category);

    files.forEach(file => {
      formData.append("images", file);
    });

    await fetch("https://my-backend-warq.onrender.com/api/upload", {
      method: "POST",
      body: formData
    });

    alert("Images uploaded successfully");
  };

  return (
    <div style={{ padding: "30px" }}>

      <style>{`

      .page-title{
        display:flex;
        align-items:center;
        gap:10px;
        font-size:26px;
        font-weight:600;
        color:#2f6b3c;
        margin-bottom:25px;
      }

      .upload-box{
        background:white;
        padding:25px;
        border-radius:15px;
        box-shadow:0 4px 10px rgba(0,0,0,0.1);
        max-width:600px;
      }

      button{
        background:#2e7d32;
        color:white;
        border:none;
        padding:10px 20px;
        border-radius:6px;
        cursor:pointer;
      }

      `}</style>

      <div className="page-title">
        <Upload size={26}/>
        Upload Designs
      </div>

      <div className="upload-box">

        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >
          <option value="">Select Category</option>

          {categories.map((cat,i)=>(
            <option key={i} value={cat}>{cat}</option>
          ))}

        </select>

        <br/><br/>

        <input
          type="file"
          multiple
          onChange={(e)=>setFiles(Array.from(e.target.files))}
        />

        <br/><br/>

        <button onClick={handleUpload}>
          Upload Images
        </button>

      </div>

    </div>
  );
};

export default FileManager;