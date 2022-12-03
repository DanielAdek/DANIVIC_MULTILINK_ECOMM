import Style from "styled-components";

export const Wrapper = Style.div`
  display:flex;
`;

export const LeftContainer = Style.div`
  flex:1;
  background-image: url("https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=550&w=400");
  background-size: cover;
   background-position: left 40%;
  background-repeat: no-repeat;
  height: 100vh;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const RightContainer = Style.div`
  flex:1;
`;

export const FormContainer = Style.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Div = Style.div`
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
`;

export const LoginHeadText = Style.div`
  font-size: .9rem;
  color: #49393b;
  text-align: center;
  line-height: 22px;
  font-family: CircularStd, Helvetica, sans-serif;
  margin-bottom: 10px;
  text-decoration: none;
`;
export const FormInput = Style.input`
  background: #fff;
  border: 1px solid #9a9a9a;
  border-radius: 4px;
  padding: 27px;
  margin: 13px 0;
  font-size: 16px;
  line-height: 22px;
  color: #3e4c59;
  width: 100%;
  position: relative;
`;

export const FormRow = Style.div``;

export const FormGroup = Style.div``;

export const Form = Style.form`
  margin:1px auto;
  width:80%;
`;

export const SiteLogo = Style.div`
 display: flex;
 justify-content: center;
`;

export const LoginButton = Style.button`
  padding: 20px;
  width: 100%;
  background: #174a41;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
`;

export const LoginLeftImage = Style.img``;

export const ForgetPassword = Style.div`
  text-decoration: none;
  color: #174a41;
  font-weight: bolder;
  margin: 5px 13px;
  margin-left:80px;
  margin-top:30px;
`;
