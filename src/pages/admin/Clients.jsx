import { useEffect, useState } from "react";
import { Users } from "lucide-react";

const Clients = () => {

  const [orders, setOrders] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);

  useEffect(() => {

    fetch("https://my-backend-warq.onrender.com/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));

  }, []);

  // Group orders by client
  const clients = [];

  orders.forEach(order => {

    const existing = clients.find(
      c => c.phone === order.phone
    );

    if (existing) {

      existing.orders.push(order);

    } else {

      clients.push({
        name: order.clientName,
        phone: order.phone,
        orders: [order]
      });

    }

  });

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

      table{
        width:100%;
        border-collapse:collapse;
        background:#fff;
        border-radius:10px;
        overflow:hidden;
        box-shadow:0 4px 10px rgba(0,0,0,0.1);
      }

      th{
        background:#f4f4f4;
        padding:12px;
        text-align:left;
      }

      td{
        padding:12px;
        border-top:1px solid #eee;
      }

      .view-btn{
        background:#2e7d32;
        color:white;
        border:none;
        padding:6px 14px;
        border-radius:5px;
        cursor:pointer;
      }

      `}</style>

      <div className="page-title">
        <Users size={26} />
        Clients
      </div>

      {/* CLIENT LIST */}

      {!selectedClient && (

        <table>

          <thead>
            <tr>
              <th>Client Name</th>
              <th>Phone</th>
              <th>Total Orders</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {clients.map((client, index) => (

              <tr key={index}>

                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>{client.orders.length}</td>

                <td>

                  <button
                    className="view-btn"
                    onClick={() => setSelectedClient(client)}
                  >
                    View Orders
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

      {/* CLIENT ORDERS */}

      {selectedClient && (

        <div>

          <h3 style={{ marginBottom: "15px" }}>
            Orders for {selectedClient.name}
          </h3>

          <button
            onClick={() => setSelectedClient(null)}
            className="view-btn"
          >
            ← Back
          </button>

          <table>

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Service</th>
                <th>Selected Services</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {selectedClient.orders.map(order => (

                <tr key={order._id}>

                  <td>{order.orderId}</td>

                  <td>{order.service}</td>

                  <td>
                    {order.selectedServices?.map((s, i) => (
                      <div key={i}>{i + 1}. {s}</div>
                    ))}
                  </td>

                  <td>{order.status}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
};

export default Clients;