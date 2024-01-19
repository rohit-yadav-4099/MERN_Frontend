import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const token = localStorage.getItem("token")


const Login = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState(
        {
            email: "",
            password: ""
        }
    )

    const changeme = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    const handle = (e) => {

        e.preventDefault()
        axios.post("http://localhost:3030/api/login", user, { headers: { "authorization": `Bearer${token}` } })
            .then((res) => {
                console.log(res)
                alert(res.data.msg)
                localStorage.setItem("token", res.data.token)
                //   localStorage.setItem("name",res.data.name)

                //   if(token){
                navigate('/')
                //   } else{

                //     navigate('/login') 
                //   }

            })

        setUser({
            email: "",
            password: ""

        })
    }
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
                                <div className="login-container-right-top-links-linkone">
                                    <NavLink to="/register">SIGNUP</NavLink>
                                </div>
                                <div className="login-container-right-top-links-linktwo">
                                    <NavLink to="/login">LOGIN</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="Register-container-right-form">
                            <div className="Register-container-right-form-container">
                                <div className="Register-container-right-form-container-top">
                                    <h1 className="Register-container-right-form-container-top-title">Sign in to your account</h1>
                                </div>
                                <div className="Register-container-right-form-container-middle">
                                    <form autocomplete="off" className="Register-container-right-form-container-middle-form" data-gtm-form-interact-id="5">
                                        {/* <div>

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
                                        </div> */}
                                        <div className="loginData">
                                        <label htmlFor="emaillogin" className="emaillogin"></label>
                                        <input type="email" 
                                        className="emaillogin" 
                                        name="email" 
                                        id="emaillogin" 
                                        placeholder="Email" 
                                        value={user.email} 
                                        onChange={changeme} 
                                        /><br />
                                        <label htmlFor="passwordlogin" className="passwordlogin"></label>
                                        <input type="password" 
                                        id="passwordlogin" 
                                        name="password" 
                                        placeholder="Password" 
                                        value={user.password} 
                                        onChange={changeme} 
                                        className="loginpasswordinput" />
                                            </div>
                                            <div className="forgot-password">
                                                <span>Forgot your password?</span>
                                            </div>
                                        <div className="loginOTPbtn">
                                            <div>
                                                <NavLink to="/">
                                                    <button type="Submit" className="signinbtn" fdprocessedid="rrubbg" onClick={handle}>SIGN IN</button>
                                                </NavLink>
                                            </div>
                                            <div>
                                                <button type="Submit" className="otpbtn" fdprocessedid="rrubbg">Login Via OTP</button>
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

export default Login