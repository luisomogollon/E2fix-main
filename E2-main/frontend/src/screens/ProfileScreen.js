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
    <>
    FORM DE PROFILE
      {/*<Row>
            <h2>User Profile</h2>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Profile Updated</Message>}
            {loading && <Loader />}
            <Col md={3}>

                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='userName'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter username'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='confirmPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Button className="my-4" type='submit' variant='primary'>
                        Update
                    </Button>
                </Form>
            </Col>
            <Col md={3}>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='lastname'>
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control
                            type='name'
                            placeholder='Enter lastname'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='dateOfBirth'>
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control
                            type='date'
                            placeholder='Enter date'
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='country'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter country'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='countryCode'>
                        <Form.Label>Country Code</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Enter country code'
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='phone'>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Enter phone number'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        ></Form.Control>

                    </Form.Group>

                </Form>
            </Col>
            <Col md={4} >
                <h3 className="text-center">Profile picture</h3>
                <Image className='img-fluid rounded-circle mx-5' src={profilePicture} alt={profilePicture} width="80%" />
                <Form className='my-3' onSubmit={submitHandler}>
                    <Form.Group controlId='pp'>
                        <Form.Control
                            type="file"
                            label="Choose file"
                            custom
                            onChange={uploadProfilePicture}
                        />
                        {uploading && <Loader />}
                    </Form.Group>
                </Form>
                <h3 className="text-center mt-5">id</h3>
                <Image className='img-fluid rounded' src={idPhoto} alt={idPhoto} />
                <Form className='my-3' onSubmit={submitHandler}>
                    <Form.Group controlId='idphoto'>
                        <Form.Control
                            type="file"
                            label="Choose file"
                            custom
                            onChange={uploadIdPhoto}
                        />
                        {uploading && <Loader />}
                    </Form.Group>
                </Form>
            </Col>
            <Col md={3}>
            </Col>
        </Row>*/}
    </>
  );
};

export default ProfileScreen;
