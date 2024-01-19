import React from "react";
import './Register.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
const token = localStorage.getItem("token");

const Register = () => {

    const Navi = useNavigate();
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        collage: "",
        passingYear: "",
    });

    const changeHandle = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if (token) {
            Navi("/register");
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.name.length === 0) {
            alert("Name field must have max 10 characters long");
            Navi("/register");
        } else if (data.email.length === 0 || data.email.length > 25) {
            alert("email field must have min 6 and max 15 characters long");
            Navi("/register");
        } else if (data.password.length === 0 || data.password.length > 15) {
            alert("password field must have min 6 and max 10 characters long");
            Navi("/register");
        } else if (data.phone.length === 0 || data.phone.length > 10) {
            alert("phoneNo. must have 10characters long");
            Navi("/register");
        } else if (data.collage.length === 0) {
            alert("enter collage name ");
            Navi("/register");
        } else if (data.passingYear.length === 0) {
            alert("enter passing year");
            Navi("/register");
        } else {
            axios.post("http://localhost:3030/api/register", data)
                .then((res) => {
                    alert(res.data.msg);
                    setData(res.data);
                    localStorage.setItem("token", res.data.token);
                    console.log(res.data.token);
                    if (res.data.msg === "user already registered") {
                        Navi("/register");
                    } else if (res.data.token) {
                        Navi("/login");
                    }
                })

                .catch((err) => console.log(err, "axios error"));
        }

        setData({
            name: "",
            phone: "",
            email: "",
            password: "",
            collage: "",
            passingYear: "",
        });
        console.log(data);
    };

    return (
        <>
            <div className="Register">
                <div className="Register-container">
                    <div className="Register-container-left">
                        <div className="Register-container-left">
                            <img className="Register__container-left-img"
                                src="\signinimages\illustrated.webp"
                                alt="Logo" />
                        </div>
                        <div className="SigninAchievements">
                            <img className="SigninAchievements-image"
                                src="\signinimages\PBlogo.webp" />
                            <div className="SigninAchievements-container">
                                <img className="SigninAchievements-container-img"
                                    src="\signinimages\students.webp" />
                                <div className="SigninAchievements-container-detail">
                                    <p className="SigninAchievements-container-detail-count">10K+</p>
                                    <p className="SigninAchievements-container-detail-title">Students Enrolled</p>
                                </div>
                            </div>
                            <div className="SigninAchievements-container">
                                <img className="SigninAchievements-container-img"
                                    src="\signinimages\college.webp" />
                                <div className="SigninAchievements-container-detail">
                                    <p className="SigninAchievements-container-detail-count">1000+</p>
                                    <p className="SigninAchievements-container-detail-title">Reach in Colleges</p>
                                </div>
                            </div>
                            <div className="SigninAchievements-container">
                                <img className="SigninAchievements-container-img"
                                    src="\signinimages\learning.webp" />
                                <div className="SigninAchievements-container-detail">
                                    <p className="SigninAchievements-container-detail-count">10K+</p>
                                    <p className="SigninAchievements-container-detail-title">Hours of Learning</p>
                                </div>
                            </div>
                            <div className="SigninAchievements-container">
                                <img className="SigninAchievements-container-img"
                                    src="\signinimages\social.webp" />
                                <div className="SigninAchievements-container-detail">
                                    <p className="SigninAchievements-container-detail-count">150K+</p>
                                    <p className="SigninAchievements-container-detail-title">Social Community</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Register-container-right">
                        <div className="Register-container-right-top">
                            <div className="Register-container-right-top-links">
                                <div className="Register-container-right-top-links-linkone">
                                    <NavLink to="/register">SIGNUP</NavLink>
                                </div>
                                <div className="Register-container-right-top-links-linktwo">
                                    <NavLink to="/login">LOGIN</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="Register-container-right-form">
                            <div className="Register-container-right-form-container">
                                <div className="Register-container-right-form-container-top">
                                    <h1 className="Register-container-right-form-container-top-title">Create your new account</h1>
                                </div>
                                {/* <div className="Register-container-right-form-container-middle">
                                    <form autocomplete="off" className="Register-container-right-form-container-middle-form" data-gtm-form-interact-id="5">
                                        <div>
                                            <div>
                                                <div className="form-container">
                                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false">Name</label>
                                                        <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                                                            <input aria-invalid="false" type="text" class="MuiInputBase-input MuiInput-input" value="" fdprocessedid="ty3esn" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-container">
                                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false">Email</label>
                                                        <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                                                            <input aria-invalid="false" type="email" class="MuiInputBase-input MuiInput-input" value="" fdprocessedid="3v4yoo" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-container">
                                                    <div className="MuiFormControl-root MuiTextField-root jss16 MuiFormControl-fullWidth">
                                                        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">Phone no.</label>
                                                        <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                                                            <input aria-invalid="false" type="tel" class="MuiInputBase-input MuiInput-input" value=" " fdprocessedid="y7zaka" data-gtm-form-interact-field-id="10" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-container">
                                                    <div className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                        <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled" data-shrink="true">Password</label>
                                                        <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd">
                                                            <input aria-invalid="false" type="password" class="MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd" value=" " fdprocessedid="22hx4" data-gtm-form-interact-field-id="11" />
                                                            <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd"><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="toggle password visibility" fdprocessedid="yqg3z6">
                                                                <span className="MuiIconButton-label">
                                                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z">
                                                                        </path>
                                                                    </svg>
                                                                </span>
                                                                <span className="MuiTouchRipple-root">
                                                                </span>
                                                            </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="register-select">
                                            <div className="select-college-container">
                                                <div class="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                                    <label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false" for="outlined-basic" id="outlined-basic-label">College</label>
                                                    <div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                                                        <input aria-invalid="false" id="outlined-basic" type="text" class="MuiInputBase-input MuiInput-input" value="" fdprocessedid="4op3ks" />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="MuiFormControl-root jss19">
                                                <label className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated" data-shrink="false" id="demo-simple-select-label">Passing Year</label>
                                                <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl">
                                                    <div className="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input" tabindex="0" role="button" aria-haspopup="listbox" aria-labelledby="demo-simple-select-label demo-simple-select" id="demo-simple-select" fdprocessedid="c90qup">
                                                        <span>
                                                        </span>
                                                    </div>
                                                    <input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput" autocomplete="off" value="" />
                                                    <svg className="MuiSvgIcon-root MuiSelect-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M7 10l5 5 5-5z">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accept-terms-and-conditions-container">
                                            <input type="checkbox" class="accept-terms-and-conditions-checkbox" name="terms-and-conditions" checked="" />
                                            <span className="accept-terms-and-conditions-label">I agree to the
                                                <a href="https://www.prepbytes.com/terms-and-conditions" target="_blank" class="terms-and-conditions-link">terms and conditions</a>.
                                            </span>
                                        </div>
                                        <NavLink to="/login">
                                        <button type="Submit" class="Register-container-right-form-container-middle-form-button" fdprocessedid="rrubbg">Sign Up</button>
                                        </NavLink>
                                        <p class="Register-container-right-form-container-middle-form-status">
                                        </p>
                                    </form>
                                </div> */}
                                <div className="under_div">
                                    <form action="/" method="POST" onSubmit={handleSubmit}>
                                        {/* <form action="/" method="POST" > */}
                                        {/* */}
                                        <div className="formData">
                                            <div>
                                                <label htmlFor="name" className="name" ></label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                    value={data.name}
                                                    autoComplete="off"
                                                    onChange={changeHandle}
                                                    className="nameinput"
                                                />
                                                <br />

                                                <label htmlFor="emailregister" className="emailregister">

                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    id="emailregister"
                                                    value={data.email}
                                                    autoComplete="off"
                                                    onChange={changeHandle}
                                                    className="emailinput"
                                                />
                                                <br />
                                                <label htmlFor="passwordregiter" className="passwordregiter"></label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password"
                                                    value={data.password}
                                                    id="passwordregiter"
                                                    autoComplete="off"
                                                    onChange={changeHandle}
                                                    className="passwordinput"
                                                />
                                                <br />
                                                <label htmlFor="numregister" className="numregister"> </label>
                                                <input
                                                    type="number"
                                                    name="phone"
                                                    placeholder="Phone no."
                                                    id="numregister"
                                                    value={data.phone}
                                                    autoComplete="off"
                                                    onChange={changeHandle}
                                                    className="phoneinput"
                                                />
                                                <br />
                                                <div className="passingyyear-container">
                                                    <label htmlFor="collage" className="numregister"></label>
                                                    <input
                                                        type="text"
                                                        name="collage"
                                                        placeholder="Collage"
                                                        id="collage"
                                                        value={data.collage}
                                                        autoComplete="off"
                                                        onChange={changeHandle}
                                                        className="collageinput"
                                                    />
                                                    <label htmlFor="passingYear" className="numregister"></label>
                                                    <input
                                                        type="number"
                                                        name="passingYear"
                                                        placeholder="Passing Year"
                                                        id="passingYear"
                                                        value={data.passingYear}
                                                        autoComplete="off"
                                                        onChange={changeHandle}
                                                        className="collageinput"
                                                    />
                                                </div>
                                                {/* <br /> */}
                                            </div>
                                            <div className="terms-and-conditions-container">
                                                <input type="checkbox"
                                                    className="terms-and-conditions-checkbox"
                                                    name="terms-and-conditions" />
                                                <span className="terms-and-conditions-label">I agree to the <a href="https://www.prepbytes.com/terms-and-conditions" target="_blank"
                                                    className="terms-and-conditions-link">terms and conditions</a>.
                                                </span>
                                            </div>
                                            <div>
                                                {/* <NavLink to="/login"> */}
                                                <button type="Submit" class="signup-form-button">Sign Up</button>
                                                {/* </NavLink> */}
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Register;