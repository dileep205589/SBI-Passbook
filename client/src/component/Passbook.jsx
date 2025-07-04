import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Passbook() {
const [cif, setCif] = useState("");
const [ac, setAc] = useState("");
const [ifsc, setIfsc] = useState("");
const [name, setName] = useState("");
const [middleName, setMiddleName] = useState("");
const [lastName, setLastName] = useState("");
const [address, setAddress] = useState("");
const [village, setVillage] = useState("");
const [pincode, setPincode] = useState("");
const [KOName, setKOName] = useState("");
const [KOLocation, setKOLocation] = useState("");
const [image, setImage] = useState(null);
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
 
  const formData = new FormData();
  formData.append("cif", cif);
  formData.append("ac", ac);
  formData.append("ifsc", ifsc);
  formData.append("name", name);
  formData.append("middleName", middleName);
  formData.append("lastName", lastName);
  formData.append("address", address);
  formData.append("village", village);
  formData.append("pincode", pincode);
  formData.append("KOName", KOName);
  formData.append("KOLocation", KOLocation);
  formData.append("image", image);
  
  try {
    const {data} = await axios.post("/api/addUser", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        
      },
      withCredentials: true,
    });
    // console.log(data);
    
    if(data) {
      navigate(`/print_passbook/${data.addUser._id}`);
    }

    
  } catch (error) {
    console.log("Error submitting form:", error);
    
  }
}

  return (
    <div className="card border border-secondary shadow-sm mx-auto mt-5" style={{ maxWidth: "600px" }}>
      <div className="card-header text-center bg-light">
        <img
          src="https://images.seeklogo.com/logo-png/39/2/sbi-logo-png_seeklogo-398127.png"
          width={24}
          alt="SBI Logo"
          className="me-2"
        />
        <strong>SBI - KIOSK BANKING Identity Card</strong>
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">CIF Number</label>
              <input
                type="text"
                name="cifNumber"
                className="form-control"
                maxLength={11}
                value={cif}
                onChange={(e) => setCif(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                className="form-control"
                maxLength={11}
                value={ac}
                onChange={(e) => setAc(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">IFSC Code</label>
              <input
                type="text"
                name="ifscCode"
                className="form-control"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Middle Name</label>
              <input
                type="text"
                name="middleName"
                className="form-control"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Village Name</label>
              <input
                type="text"
                name="villageName"
                className="form-control"
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Pin Code</label>
              <input
                type="text"
                name="pinCode"
                className="form-control"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">KO Name</label>
              <input
                type="text"
                name="koName"
                className="form-control"
                value={KOName}
                onChange={(e) => setKOName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">KO Location</label>
              <input
                type="text"
                name="koLocation"
                className="form-control"
                value={KOLocation}
                onChange={(e) => setKOLocation(e.target.value)}
              />
            </div>
           
            <div className="col-md-6">
              <label className="form-label">Upload Image</label>
              <input
                type="file"
                name="image"
                className="form-control"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])} 
                required
              />
          </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4 w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

