import { useEffect, useState } from "react";
import { LayoutDashboard, ShoppingCart, Users, Clock, Image } from "lucide-react";

const Dashboard = () => {

  const [orders, setOrders] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {

    fetch("https://my-backend-warq.onrender.com/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));

    fetch("https://your-backend.onrender.com/api/images")
    .then(res => res.json())
    .then(data => setImages(data));

  }, []);

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(o => o.status === "Pending").length;

  const recentOrders = orders.slice(0, 5);

  const cardStyle = {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  return (
    <div>

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

      .dashboard-grid{
        display:grid;
        grid-template-columns:repeat(4,1fr);
        gap:20px;
        margin-bottom:40px;
      }

      table{
        width:100%;
        border-collapse:collapse;
      }

      th{
        text-align:left;
        padding-bottom:10px;
        color:#555;
      }

      td{
        padding:10px 0;
        border-top:1px solid #eee;
      }

      `}</style>

      <div className="page-title">
        <LayoutDashboard size={26} />
        Dashboard
      </div>

      {/* STAT CARDS */}

      <div className="dashboard-grid">

        <div style={cardStyle}>
          <div>
            <h4>Orders</h4>
            <h2>{totalOrders}</h2>
          </div>
          <ShoppingCart size={35} color="#4CAF50"/>
        </div>

        <div style={cardStyle}>
          <div>
            <h4>Clients</h4>
            <h2>{orders.length}</h2>
          </div>
          <Users size={35} color="#2196F3"/>
        </div>

        <div style={cardStyle}>
          <div>
            <h4>Pending</h4>
            <h2>{pendingOrders}</h2>
          </div>
          <Clock size={35} color="#FF9800"/>
        </div>

        <div style={cardStyle}>
          <div>
            <h4>Uploaded Images</h4>
            <h2>{images.length}</h2>
          </div>
          <Image size={35} color="#9C27B0"/>
        </div>

      </div>

      {/* RECENT ORDERS */}

      <div style={{
        background:"#fff",
        padding:"20px",
        borderRadius:"15px",
        boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
      }}>

        <h3 style={{marginBottom:"15px"}}>Recent Orders</h3>

        <table>

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Client</th>
              <th>Service</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {recentOrders.map(order => (

              <tr key={order._id}>
                <td>{order.orderId}</td>
                <td>{order.clientName}</td>
                <td>{order.service}</td>
                <td>{order.status}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Dashboard;