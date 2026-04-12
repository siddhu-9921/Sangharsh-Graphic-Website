import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { UploadCloud } from "lucide-react";

function Quote() {

  const navigate = useNavigate();
  const location = useLocation();
  const service = location.state || {};

  const features = service.features || [
    "Logo Design",
    "Business Cards",
    "Letterheads",
    "Brand Guidelines"
  ];

  // Generate order ID only once
  const [orderId] = useState(() => "ORD-" + Date.now());

  const [selected, setSelected] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  

  const toggleFeature = (feature) => {

    if (selected.includes(feature)) {
      setSelected(selected.filter(item => item !== feature));
    } else {
      setSelected([...selected, feature]);
    }

  };

  

  const handleSubmit = async (e) => {

    e.preventDefault();

    const orderData = {
      orderId,
      service: service.title || "Graphic Design Package",
      selectedServices: selected,
      clientName: name,
      phone,
      description,
     
    };

    try {

      const res = await fetch("https://my-backend-warq.onrender.com/api/orders", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(orderData)

      });

      const data = await res.json();

      alert("Order Submitted Successfully");

      console.log(data);

    } catch (error) {

      alert("Order submission failed");

    }

  };

  return (

    <>
      <style>{`

      .quote-page{
        max-width:900px;
        margin:auto;
        padding:30px;
      }

      .order-header{
        background:#2e5e3b;
        color:white;
        padding:15px;
        text-align:center;
        font-size:22px;
        border-radius:10px;
        margin-bottom:20px;
      }

      .service-title{
        text-align:center;
        margin-bottom:25px;
      }

      .card{
        background:white;
        border-radius:15px;
        padding:25px;
        box-shadow:0 4px 10px rgba(0,0,0,0.1);
        margin-bottom:20px;
      }

      .features{
        display:flex;
        flex-wrap:wrap;
        gap:12px;
        margin-top:10px;
      }

      .feature-btn{
        padding:8px 14px;
        border-radius:20px;
        border:1px solid #ccc;
        cursor:pointer;
        background:#f4f4f4;
      }

      .feature-btn.active{
        background:#2e7d32;
        color:white;
        border:none;
      }

      .input-row{
        display:flex;
        gap:15px;
        margin-bottom:15px;
      }

      input, textarea{
        width:100%;
        padding:10px;
        border-radius:8px;
        border:1px solid #ccc;
      }

      textarea{
        min-height:80px;
      }

      .file-box{
        border:2px dashed #bbb;
        padding:20px;
        text-align:center;
        border-radius:10px;
        cursor:pointer;
      }

      .submit-btn{
        background:#2e7d32;
        color:white;
        padding:12px 35px;
        border:none;
        border-radius:6px;
        font-size:16px;
        cursor:pointer;
      }

      .submit-btn:hover{
        background:#3339;
      }

      .button-row{
        display:flex;
        justify-content:center;
        gap:20px;
        margin-top:10px;
      }

      .back-btn{
        background:#2e7d32;
        color:white;
        padding:12px 35px;
        border:none;
        border-radius:6px;
        font-size:16px;
        cursor:pointer;
      }

      .back-btn:hover{
        background:#3339;
      }

      .preview{
        margin-top:15px;
      }

      

      `}</style>

      <div className="quote-page">

        <div className="order-header">
          Order No: {orderId}
        </div>

        <h2 className="service-title">
          Selected Service: {service.title || "Graphic Design Package"}
        </h2>

        {/* Service Selection */}

        <div className="card">

          <h3>Select Services</h3>

          <div className="features">

            {features.map((feature, index) => (

              <div
                key={index}
                className={`feature-btn ${selected.includes(feature) ? "active" : ""}`}
                onClick={() => toggleFeature(feature)}
              >
                {feature}
              </div>

            ))}

          </div>

         

        </div>

        {/* Client Info */}

        <form onSubmit={handleSubmit}>

          <div className="card">

            <h3>Client Information</h3>

            <div className="input-row">

              <input
                placeholder="Client Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

            </div>

            <textarea
              placeholder="Project Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <br /><br />

            <label className="file-box">

              <UploadCloud size={24} />
              <p>Upload Reference File</p>

              <input
                type="file"
                hidden
                onChange={(e) => {

                  const selectedFile = e.target.files[0];

                  setFile(selectedFile);

                  if (selectedFile) {
                    setPreview(URL.createObjectURL(selectedFile));
                  }

                }}
              />

            </label>

            {preview && (

              <div className="preview">

                <img
                  src={preview}
                  alt="preview"
                  style={{
                    width: "150px",
                    borderRadius: "10px"
                  }}
                />

              </div>

            )}

          </div>

          <div className="button-row">

            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/")}
            >
              Back
            </button>

            <button className="submit-btn">
              Submit Order
            </button>

          </div>

        </form>

      </div>
    </>
  );

}

export default Quote;