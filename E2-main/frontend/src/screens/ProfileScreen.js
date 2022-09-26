import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

const ProfileScreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");
  const [idPhoto, setIdPhoto] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  var { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
      } else {
        setUserName(user.userName);
        setEmail(user.email);
        setCountryCode(user.countryCode);
        setPhone(user.phone);
        setName(user.name);
        setLastname(user.lastname);
        setDateOfBirth(user.dateOfBirth.substring(0, 10));
        setCountry(user.country);
        setNickname(user.nickname);
        setDescription(user.description);
        setIdPhoto(user.idPhoto);
        setProfilePicture(user.profilePicture);
      }
    }
  }, [dispatch, navigate, userInfo, user, success]);
  const uploadProfilePicture = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setProfilePicture(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  const uploadIdPhoto = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setIdPhoto(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          userName,
          email,
          countryCode,
          phone,
          name,
          lastname,
          dateOfBirth,
          country,
          nickname,
          description,
          idPhoto,
          profilePicture,
          password,
        })
      );
    }
  };
  return (
    <section className="text-gray-600 body-font relative ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
            Profile
            
          </h1>
          
          <div className="container mx-auto flex px-5 py-7 items-center justify-center flex-col">
            <img
            
              className="lg:w-3/6 md:w-3/6 w-6/6 mb-2 object-cover object-center rounded"
              src={profilePicture}
              alt="Profile Pic"
              width="80%"
              onChange={uploadProfilePicture}
            />
            <input
              className="block w-70 px-1 py-1 mb-4 bg-gray-200 border-2   rounded-sm border-gray-300 outline-none focus:border-indigo-500"
              aria-describedby="user_avatar_help"
              label="Choose file"
              type="file"
              custom
              onChange={uploadProfilePicture}
            />
            {uploading && <Loader />}

            <div className="text-center lg:w-1/3 w-full"></div>
            <div className="lg:w-1/2 md:w-2/3 flex mx-auto mt-10 text-start">
              <div className="flex flex-wrap -m-8">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      UserName
                    </label>

                    <input
                      type="text"
                      id="name"
                      placeholder="Enter username"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      name="name"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Confirm Pass
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>

                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Last Name{" "}
                    </label>
                    <input
                      type="name"
                      placeholder="Enter lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Date Of Birth
                    </label>
                    <input
                      type="date"
                      placeholder="Enter date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="Enter country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Country Code
                    </label>
                    <input
                      type="number"
                      placeholder="Enter country code"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Phone
                    </label>
                    <input
                      type="number"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
                <div className="flex flex-col  mt-2 text-center w-full mb-2">
                  <h1 className="sm:text-3xl text-2xl   text-center font-medium title-font  text-gray-900">
                    ID
                  </h1>
                </div>

                <div className="container mx-auto flex flex-col items-center justify-center ">
                  <img
                    className="lg:w-3/6 md:w-3/6 w-6/6 mb-14 object-cover object-center rounded"
                    src={idPhoto}
                    alt={idPhoto}
                  />
                    <input
              className="block w-70 px-1 py-1 mb-4 bg-gray-200 border-2   rounded-sm border-gray-300 outline-none focus:border-indigo-500"
              aria-describedby="user_avatar_help"
              label="Choose file"
              type="file"
              custom
              onChange={uploadIdPhoto}
            />
           {uploading && <Loader />}
                  
                </div>
                
                <div className="container mx-auto flex  items-center justify-center ">
                  <button class="bg-slate-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span>UPDATE</span>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileScreen;
