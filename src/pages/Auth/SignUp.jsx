import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BsEmojiLaughing, BsEmojiExpressionless } from "react-icons/bs";
import { validateEmail, validatePassword } from "../../utils/validator";
import { REGISTER_USER } from "../../graphql/mutations/userMutation";
import { useMutation } from "@apollo/client";

const defaultData = {
  name: "",
  email: "",
  phoneNo: "",
  password: "",
  isInvestor: false
};

export const SignUp = () => {
  const [formData, setFormData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const pageRoute = useNavigate();

  const [createUser]= useMutation(REGISTER_USER);


  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerUser= async()=>{
    // using the graphql trying to make the api calls
    try{
        const registeredUser=await createUser({
          variables: {
            name: formData.name,
            phoneNo: formData.phoneNo,
            email: formData.email,
            password: formData.password,
            isInvestor: formData.isInvestor
          }
        });
        return registeredUser;
    }catch(err){
      setIsLoading(false)
      toast.error(err.message, {
          autoClose: 5500,
          pauseOnHover: true
      })
    }
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (validateEmail(formData.email) && validatePassword(formData.password)) {
      const data =await registerUser();
      if (data?.accessToken) {
        localStorage.setItem("UserToken", data.accessToken);
        setIsLoading(false);
        pageRoute("/home");
      } else {
        setIsLoading(false);
        toast.error("Invalid Credentials");
      }
    } else {
      setIsLoading(false);
      toast.warning("Provide Valid Credentials");
      setFormData({ ...formData, password: "" });
    }
  };

  useEffect(() => {
    const isValid = async () => {
      const data = "";
      if (data?.accessToken) {
        window.location.href = "/chats";
      }
    };
    isValid();
  }, []);
  return (
    <div className="bg-[#121418] w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[90%] sm:w-[400px] pl-0 ml-0 h-[400px] sm:pl-0 sm:ml-9 mt-10 relative">
        <div className="absolute -top-7 left-0">
          <h3 className=" text-[25px] font-bold tracking-wider text-[#fff]">
            Register
          </h3>
          <p className="text-[#fff] text-[12px] tracking-wider font-medium">
            Have Account ?{" "}
            <Link className="text-[rgba(0,195,154,1)] underline" to="/login">
              Sign in
            </Link>
          </p>
        </div>
        <form
          className="flex flex-col gap-y-3 mt-[12%]"
          onSubmit={handleOnSubmit}
        >
          <div className="flex gap-x-2 w-[100%]">
            <input
              onChange={handleOnChange}
              className="bg-[#222222] h-[50px] pl-3 text-[#ffff] w-[49%] sm:w-[47%]"
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              required
            />
            <input
              onChange={handleOnChange}
              className="bg-[#222222] h-[50px] pl-3 text-[#ffff] w-[49%] sm:w-[47%]"
              type="tel"
              name="phoneNo"
              placeholder="Phone No"
              value={formData.phoneNo}
              required
            />
          </div>
          <div>
            <input
              onChange={handleOnChange}
              className="bg-[#222222] h-[50px] pl-3 text-[#ffff] w-[100%] sm:w-[96.3%]"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              required
            />
          </div>
          <div className="relative flex flex-col gap-y-3">
            <input
              onChange={handleOnChange}
              className="bg-[#222222] h-[50px] pl-3 text-[#ffff] w-[100%] sm:w-[96.3%]"
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              required
            />

            {/* <button onCli type="button">
            <BsEmojiExpressionless className='text-[#fff] absolute top-3 right-6 w-[30px] h-[25px]' />
          </button> */}
            {!showPass ? (
              <button type="button">
                <BsEmojiLaughing
                  onClick={() => setShowPass(!showPass)}
                  className="text-[#fff] absolute top-3 right-4 sm:right-6 w-[30px] h-[25px]"
                />
              </button>
            ) : (
              <button type="button">
                {" "}
                <BsEmojiExpressionless
                  onClick={() => setShowPass(!showPass)}
                  className="text-[#fff] absolute top-3 right-4 sm:right-6 w-[30px] h-[25px]"
                />
              </button>
            )}
          </div>
          <button
            style={{
              background:
                "linear-gradient(90deg, rgba(0,195,154,1) 0%, rgba(224,205,115,1) 100%)",
            }}
            className="w-[100%]  sm:w-[96.3%] h-[50px] font-bold text-[#121418] tracking-wide text-[17px] relative"
            type="submit"
          >
            <div
              style={{ display: isLoading ? "" : "none" }}
              className="absolute -top-[53px] left-[29.5%] sm:-top-[53px] sm:left-[87px]"
            >
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_h9kds1my.json"
                background="transparent"
                speed="1"
                style={{ width: "200px", height: "160px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <p
              style={{ display: isLoading ? "none" : "block" }}
              className="test-[#fff]"
            >
              Regsiter
            </p>
          </button>
          <p className="text-[#fff] text-center sm:-ml-8">/</p>
          {/* <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            render={(renderProps) => (
              <button
                style={{
                  borderImage:
                    "linear-gradient(to right, rgba(0,195,154,1) 50%, rgba(224,205,115,1) 80%)",
                  borderImageSlice: "1",
                }}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                aria-label="Continue with google"
                className="focus:ring-2 focus:ring-offset-1   py-3.5 px-4 border rounded-lg  flex items-center w-[100%]  sm:w-[96.3%]"
                disableElevation={true}
                disableFocusRipple={true}
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                  alt="google"
                />
                <p className="text-[base] font-medium ml-4 text-[#fff]">
                  Continue with Google
                </p>
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
          /> */}
        </form>
      </div>
    </div>
  );
};
