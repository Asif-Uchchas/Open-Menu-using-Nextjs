import React from "react";

interface Props{
    inputs: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        city: string;
      password: string;
  },
  handleChangeInput: (e:React.ChangeEvent<HTMLInputElement>) => void,
  isSignup: boolean;
}
const AuthModalInputs = ({inputs, isSignup, handleChangeInput}:Props) => {1 
  return (
    <>
      {isSignup? null:
      <div className="my-2 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="First Name"
          name="firstName"
            value={inputs.firstName}
            onChange={handleChangeInput}
        />{" "}
        {/*  */}
        <input
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
          placeholder="Last Name"
          name="lastName"
            value={inputs.lastName}
            onChange={handleChangeInput}
        />
        {/* onChange={handleChangeInput} */}
      </div>}
      <div className="my-4 flex justify-between text-sm">
        <input
          type="text"
          className="border rounded p-2 py-3 w-full"
          placeholder="Email"
          name="email"
          value={inputs.email}
          onChange={handleChangeInput}
        />{" "}
        {/*  onChange={handleChangeInput} */}
      </div>
      {isSignup ? null :
        <div className="my-2 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="City"
            name="city"
            value={inputs.city}
            onChange={handleChangeInput}
          />{" "}
          {/*  */}
          <input
            type="text"
            className="border rounded p-2 py-3 w-[49%]"
            placeholder="Phone"
            name="phone"
            value={inputs.phone}
            onChange={handleChangeInput}
          />
          {/* onChange={handleChangeInput} */}
        </div>}
      <div className="my-4 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 py-3 w-full"
          placeholder="Password"
          name="password"
          value={inputs.password}
          onChange={handleChangeInput}
        />{" "}
        {/*  onChange={handleChangeInput} */}
      </div>
    </>
  );
};

export default AuthModalInputs;
