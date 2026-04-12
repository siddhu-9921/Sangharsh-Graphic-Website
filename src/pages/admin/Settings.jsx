import { Settings, User, Monitor, Shield, Bell, HelpCircle, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SettingsPage() {

  const navigate = useNavigate();   // ✅ INSIDE component

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/", { replace: true });   // go to home page

  };

  const settings = [
    { icon: <User size={20}/>, label: "User Account Settings" },
    { icon: <Monitor size={20}/>, label: "Interface Preferences" },
    { icon: <Shield size={20}/>, label: "Privacy" },
    { icon: <Bell size={20}/>, label: "Notifications" },
    { icon: <HelpCircle size={20}/>, label: "Help" }
  ];

  return (
    <>
      <style>{`

      .settings-page{
        padding:30px;
      }

      .settings-title{
        display:flex;
        align-items:center;
        gap:10px;
        margin-bottom:25px;
        color:#2e5e3b;
      }

      .settings-card{
        background:#f3f3f3;
        padding:30px;
        border-radius:25px;
        max-width:420px;
        box-shadow:0 4px 10px rgba(0,0,0,0.1);
      }

      .setting-item{
        display:flex;
        align-items:center;
        gap:15px;
        padding:15px;
        font-size:18px;
        border-radius:10px;
        cursor:pointer;
        transition:0.2s;
      }

      .setting-item:hover{
        background:#e0e0e0;
      }

      .logout{
        color:#ff4d4d;
        font-weight:600;
        margin-top:20px;
      }

      `}</style>

      <div className="settings-page">

        <h2 className="settings-title">
          <Settings size={26}/> Settings
        </h2>

        <div className="settings-card">

          {settings.map((item,index)=>(
            <div key={index} className="setting-item">
              {item.icon}
              {item.label}
            </div>
          ))}

          {/* ✅ Logout button */}
          <div className="setting-item logout" onClick={handleLogout}>
            <LogOut size={20}/> Logout
          </div>

        </div>

      </div>
    </>
  );
}

export default SettingsPage;