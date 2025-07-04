import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function GetAll() {
    const [getAllUser, setGetAllUser] = useState([]);
  
    const getAllUserData = async () => {
        try {
            const {data} = await axios.get("http://localhost:5000/api/getAllUser");
            // console.log(data);
            setGetAllUser(data);
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message); 
        }
    }

    const handleDeleted = async (id) => {
        try {
          const {data} = await axios.post(`http://localhost:5000/api/deleteUser/${id}`);
          toast.success(data.message);
       
          setGetAllUser((getAllUser) => getAllUser.filter((card) => card._id !== id));
        } catch (error) {
          console.log(error);
          toast.error(error.response?.data?.message || "Error deleting Adhaar card.");
        }
      };

    useEffect(() => {
        getAllUserData();
    }, [])

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-8 col-sm-12 col-lg-8 tableContainer">
            <table className="table table-striped">
              <thead>
                <tr>
                    <th>S.N</th>
                    <th>Name</th>
                    <th>Account No.</th>
                    <th>
                       Action
                    </th>
                </tr>
              </thead>
              <tbody>
                {
                   getAllUser && getAllUser.length === 0 ? (
                    <tr>
                        <p className="text-center">No Data Available {" "}</p>
                    </tr>
                   ): (
                    getAllUser.map((item, index) => (
                        <tr key={item._id}>
                              <td>{index + 1}</td>
                              <td>{item.name}</td>
                              <td>{item.ac}</td>
                              <td>
                              <Link to={`/print_passbook/${item._id}`}>
                         <button className="btn btn-primary">PRINT</button>
                        </Link>
                     
                       
                      <button className="btn btn-danger mx-2" onClick={() => handleDeleted(item._id)}>Delete</button>
                   
                       
                              </td>
                        </tr>
                    ))
                   )
                }
              </tbody>
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
}

export default GetAll;
