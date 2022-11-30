import * as SI from "../assets/styles/login";

import React from "react";

export const LoginPage = () => {
  return (
    <SI.Wrapper>
      <SI.LeftContainer />
      <SI.RightContainer>
        <SI.FormContainer>
          <SI.SiteLogo></SI.SiteLogo>
          <SI.Div>Welcome Back!</SI.Div>
          <SI.LoginHeadText>Don't have an account? Sign Up</SI.LoginHeadText>
          <SI.Form>
            <SI.FormRow className="form-row">
              <SI.FormGroup className="form-group col-md-12">
                <SI.FormInput
                  type="text"
                  name="dataField"
                  placeholder="Email or Phone Number"
                  className="form-control"
                ></SI.FormInput>
              </SI.FormGroup>

              <SI.FormGroup className="form-group col-md-12">
                <SI.FormInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                ></SI.FormInput>
              </SI.FormGroup>
            </SI.FormRow>
            <SI.LoginButton type="button">Sign In</SI.LoginButton>
          </SI.Form>
          <SI.ForgetPassword></SI.ForgetPassword>
        </SI.FormContainer>
      </SI.RightContainer>
    </SI.Wrapper>
  );
};
