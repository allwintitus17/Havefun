import {useForm} from "react-hook-form";
import React,{useState} from "react";
import { CustomButton, TextInput } from "../components";
import {Loading} from "../components";

const ResetPassword=()=>{
  const [errMsg,setErrMsg]=useState("");
  const [isSubmitting,setIsSubmitting]=useState(false);

  const {
    register,
    handleSubmit,
    formState:{errors},
  }=useForm({

    mode:"onChange",
  });
  const onSubmit=async(data)=>{};
  return <div className="w-full h-[100vh] bg-bgColor flex items-center justify-center p-6">

    <div className="bg-primary w-full md:w-1/3 2xl:w-1/4 px-6 py-8 shadow-md rounded-lg">
       
       <p className="text-ascent-1 text-lg font-semibold">Email Address</p>
    <span className="text-sm text-ascent-2" >
      Enter the email address used during registration
    </span>
    <form onSubmit={handleSubmit(onsubmit)}
    className='py-4 flex flex-col gap-5'
    >
      <TextInput
              name='email'
              placeholder='email@example.com'
              label='Email Address'
              type='email'
              register={register("email", {
                required: "Email Address is required",
              })}
              styles='w-full rounded-full'
              labelStyle='ml-2'
              error={errors.email ? errors.email.message : ""}
            />
             {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type='submit'
                containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
                title='ResetPassword'
              />
            )}
    </form>
    </div>
  </div>
};

export default ResetPassword