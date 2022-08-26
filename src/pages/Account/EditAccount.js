import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserDetails } from "../../slices/api/simpleApi";

const EditAccount = () => {
  const [userDetails, setUserDetails] = useState({});
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
    address: "",
    landmark: "",
    city: "",
    zip: "",
  });
  let token = localStorage.getItem("token");
  useEffect(() => {
    const callback = (data) => {
      setUserDetails({ ...data });
    };
    getUserDetails(callback, token);
  }, []);
  console.log(userDetails);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(userData);
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="col-lg-12 px-4">
              <div className="row justify-content-between p-md-5 list-row">
                <div className="col-xl-3 col-lg-3 col-12 py-2 align-self-start text-center">
                  <div className="kol-user-img">
                    <img
                      src={userDetails.avatar}
                      className="img-fluid"
                      alt="avatar"
                    />
                  </div>
                  <button type="button" className="btn theme-btn col-12 mb-4">
                    Update Photo
                  </button>
                </div>
                <div className="col-xl-9 col-lg-9 col-12 px-lg-4">
                  <div className="row justify-content-between">
                    <h2 className="mb-4">Edit your Profile</h2>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <label className="col-12 col-form-label fw-medium">
                        First Name
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter First name"
                          name="firstName"
                          defaultValue={userDetails.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-12 col-form-label fw-medium">
                        Last Name
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Last name"
                          name="lastName"
                          defaultValue={userDetails.last_name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-12 col-form-label fw-medium">
                        Mobile
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Emter Mobile number"
                          name="phone"
                          defaultValue={userDetails.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-12 col-form-label fw-medium">
                        Gender
                      </label>
                      <div className="col-12">
                        <div className="form-check d-inline-block me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="male">
                            Male
                          </label>
                        </div>
                        <div className="form-check d-inline-block">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="female">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-12 col-form-label fw-medium">
                        Address
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Address"
                          name="address"
                          onChange={handleChange}
                          defaultValue={userDetails?.get_address?.address}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-12 col-form-label fw-medium ">
                        Landmark
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Landmark"
                          name="landmark"
                          defaultValue={userDetails?.get_address?.landmark}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-12 col-form-label fw-medium">
                        City
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter city"
                          name="city"
                          defaultValue={userDetails?.get_address?.city}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-12 col-form-label fw-medium">
                        Zip Code
                      </label>
                      <div className="col-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Zip code"
                          name="zip"
                          defaultValue={userDetails?.get_address?.zip}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-12 mt-2">
                        <button type="submit" className="btn theme-btn">
                          Save Profile
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
