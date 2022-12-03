import * as SA from "../assets/styles/signup";

export const SignupAuthentication = () => {
  // Redux Hooks

  return (
    <SA.Wrapper>
      <SA.LeftContainer />
      <SA.RightContainer>
        <SA.SiteLogo></SA.SiteLogo>
        <SA.HeaderText>Welcome to DMS</SA.HeaderText>
        {/* <SA.SignupHeadText pos="center">
          Already have an account?
        </SA.SignupHeadText> */}
        <SA.FormContainer>
          <SA.FormRow className="form-row">
            <SA.FormGroup className="form-group col-md-6">
              <SA.FormInput
                type="text"
                name="username"
                placeholder="username"
                className="form-control"
              />
            </SA.FormGroup>

            <SA.FormGroup className="form-group col-md-6">
              <SA.FormInput
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="form-control"
              />
            </SA.FormGroup>

            <SA.FormGroup className="form-group col-md-6">
              <SA.FormInput
                type="text"
                name="deliveryAddress"
                placeholder="Full Address"
                className="form-control"
              />
            </SA.FormGroup>

            <SA.FormGroup className="form-group col-md-6">
              <SA.FormInput
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />
            </SA.FormGroup>

            <SA.FormGroup className="form-group col-md-6">
              <SA.FormInput
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
              />
            </SA.FormGroup>
            <SA.FormGroup className="form-group col-lg-12">
              <SA.FormInput
                type="text"
                name="userAddress"
                placeholder="Full Address"
                className="form-control"
              />
            </SA.FormGroup>
          </SA.FormRow>
          <SA.Button type="button">Register</SA.Button>
          {/* <SA.SignupHeadText pos="left" color="blue" arr="pointer">
            view the latest trending shopables
          </SA.SignupHeadText> */}
        </SA.FormContainer>
      </SA.RightContainer>
    </SA.Wrapper>
  );
};
