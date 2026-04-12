import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, ListChecks, Users, Upload, Image, Settings, LogOut } from "lucide-react";
import logoImg from '@/assets/team/logo.png';

const AdminSidebar = () => {

  const navigate = useNavigate();   // ✅ INSIDE component

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <>
      <style>
        {`
        .sidebar{
          width:260px;
          height:100vh;
          background:linear-gradient(180deg,#1d1f27,#262833);
          color:white;
          padding:30px 20px;
          border-radius:0 30px 30px 0;
          display:flex;
          flex-direction:column;
          justify-content:space-between;
        }

        .logo-area{
          text-align:center;
        }

        .logo{
          width:120px;
          height:120px;
          border-radius:50%;
          margin:auto;
          background:black;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }

        .logo img{
          width:100%;
        }

        .brand{
          margin-top:15px;
          font-size:22px;
          font-weight:600;
          line-height:1.3;
        }

        .menu{
          margin-top:40px;
          display:flex;
          flex-direction:column;
          gap:18px;
        }

        .menu a{
          display:flex;
          align-items:center;
          gap:14px;
          padding:12px 16px;
          color:#c7c7c7;
          text-decoration:none;
          border-radius:8px;
          font-size:16px;
        }

        .menu a:hover{
          background:#2f323e;
          color:white;
        }

        .menu a.active{
          background:#4e5d55;
          color:white;
        }

        .logout{
          display:flex;
          align-items:center;
          gap:10px;
          color:#ff4d4d;
          font-weight:600;
          margin-top:20px;
          cursor:pointer;
        }
        `}
      </style>

      <div className="sidebar">

        <div>

          <div className="logo-area">
            <div className="logo">
              <img src={logoImg} />
            </div>

            <div className="brand">
              Sangharsh<br />Graphic Designs
            </div>
          </div>

          <div className="menu">

            <NavLink to="/admin-sangam@9822" end>
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>

            <NavLink to="/admin-sangam@9822/orders">
              <ListChecks size={20} />
              Orders
            </NavLink>

            <NavLink to="/admin-sangam@9822/clients">
              <Users size={20} />
              Clients
            </NavLink>

            <NavLink to="/admin-sangam@9822/file-manager">
              <Upload size={20} />
              Upload File
            </NavLink>

            <NavLink to="/admin-sangam@9822/gallery-manager">
              <Image size={20} />
              Gallery Manager
            </NavLink>

            <NavLink to="/admin-sangam@9822/settings">
              <Settings size={20} />
              Settings
            </NavLink>

          </div>

        </div>

        {/* ✅ Logout button */}
        <div className="logout" onClick={handleLogout}>
          <LogOut size={20} />
          LOG OUT
        </div>

      </div>
    </>
  );
};

export default AdminSidebar;