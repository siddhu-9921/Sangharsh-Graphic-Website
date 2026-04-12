import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { ListChecks } from "lucide-react";

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetch("https://my-backend-warq.onrender.com/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));

  }, []);

  const updateStatus = async (id, status) => {

    await fetch(`https://my-backend-warq.onrender.com/api/orders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });

    setOrders(prev =>
      prev.map(order =>
        order._id === id ? { ...order, status } : order
      )
    );

  };

  const filteredOrders = orders.filter(order =>
    order.clientName?.toLowerCase().includes(search.toLowerCase()) ||
    order.orderId?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{`

      .orders-page{
        padding:30px;
      }

      .orders-header{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:20px;
      }

      .search-box{
        display:flex;
        align-items:center;
        background:white;
        border-radius:25px;
        padding:8px 15px;
        box-shadow:0 2px 5px rgba(0,0,0,0.1);
      }

      .search-box input{
        border:none;
        outline:none;
        margin-left:8px;
      }

      .orders-table{
        width:100%;
        border-collapse:collapse;
        background:white;
        border-radius:10px;
        overflow:hidden;
        box-shadow:0 4px 10px rgba(0,0,0,0.1);
      }

      .orders-table th{
        background:#f3f3f3;
        padding:12px;
        text-align:left;
      }

      .orders-table td{
        padding:12px;
        border-top:1px solid #eee;
      }

      .status-select{
        padding:5px 10px;
        border-radius:6px;
      }

      .view-btn{
        background:#2e7d32;
        color:white;
        border:none;
        padding:6px 14px;
        border-radius:5px;
        cursor:pointer;
      }

      .page-title{
        display:flex;
        align-items:center;
        gap:10px;
        font-size:26px;
        font-weight:600;
        color:#2f6b3c;
      }

      .title-icon{
        color:#2f6b3c;
      }

      `}</style>

      <div className="orders-page">

        <div className="orders-header">

          <div className="page-title">
            <ListChecks size={26} className="title-icon" />
            Orders
          </div>

          <div className="search-box">
            <Search size={16} />
            <input
              placeholder="Search Order / Client"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Service</th>
              <th>Selected Services</th>
              <th>Client</th>
              <th>Phone</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {filteredOrders.map(order => (

              <tr key={order._id}>

                <td>{order.orderId}</td>

                <td>{order.service}</td>

                <td>
                  {order.selectedServices?.map((s, i) => (
                    <div key={i}>{i + 1}. {s}</div>
                  ))}
                </td>

                <td>{order.clientName}</td>

                <td>{order.phone}</td>

                <td>₹{order.price}</td>

                <td>

                  <select
                    className="status-select"
                    value={order.status}
                    onChange={(e) =>
                      updateStatus(order._id, e.target.value)
                    }
                  >

                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Delivered</option>

                  </select>

                </td>

              </tr>

            ))}

          </tbody>
        </table>

      </div>
    </>
  );
};

export default Orders;