import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function Card() {
  const [getUser, setGetUser] = useState([]);
  const {id} = useParams();

  const getUserData = async () => {
    try {
      const {data} = await axios.get(`/api/getUser/${id}`)
      // console.log(data);
      setGetUser(data.user);
    } catch (error) {
      console.error(error);
      toast.error(error.responese.data.message);
      
    }
  }

  useEffect(() => {
    getUserData();
  }, [])
   
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-2 col-md-3 col-lg-3"></div>
          <div className="col-8 col-md-6 col-lg-5 card shadow">
            <div className="text-center mt-2 mb-4">
              <img
                src="/images/sbilogo.png"
                width={24}
                alt="SBI Logo"
                className="me-2"
              />
              <strong>
                SBI - KIOSK BANKING <br /> Duplicate Identity Card
              </strong>
            </div>

            <div className="card-content">
              <div className="row">
                {/* Details section (left) */}
                <div className="col-8 cardDetails">
                  <div className="row mt-2">
                    <div className="col-6">
                      <h6>CIF Number:</h6>
                    </div>
                    <div className="col-6">
                      <p>{getUser.cif}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>Account Number:</h6>
                    </div>
                    <div className="col-6">
                      <p>{getUser.ac}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>IFSC Code:</h6>
                    </div>
                    <div className="col-6">
                      <p>{getUser.ifsc}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>First Name:</h6>
                    </div>
                    <div className="col-6">
                      <p>{getUser.name}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>Middle Name:</h6>
                    </div>
                    <div className="col-6">
                      <p>{getUser.middleName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>Last Name:</h6>
                    </div>
                    <div className="col-6">
                      <p>{getUser.lastName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>Address:</h6>
                    </div>
                    <div className="col-6">
                      <p>{getUser.address}</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-6">
                      <h6>Village Name:</h6>
                    </div>
                    <div className="col-6">
                      <p>{getUser.village}</p>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-6">
                      <h6>Pin Code:</h6>
                    </div>
                    <div className="col-6">
                      <p>{getUser.pincode}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>KO Name:</h6>
                    </div>
                    <div className="col-6">
                      <p>{getUser.KOName}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h6>KO Location:</h6>
                    </div>
                    <div className="col-6">
                      <p>{getUser.KOLocation}</p>
                    </div>
                  </div>
                </div>

                {/* Image section (right) */}
                <div className="col-4 CardImg">
                  
                    <img
                      src={getUser.image?.url}
                      className="PersonImg"
                     
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
