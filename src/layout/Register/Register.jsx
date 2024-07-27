import { Button, Skeleton, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";


const Register = () => {
 const { loading, createUser, updateUser, googleLogin, githubLogin } =
   useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data) 
    const { email, password, name } = data;
    createUser(email, password).then(()=> {
      updateUser(name).then(() => {
      })
    }).catch(error => {
      console.log(error);
    })
    
  };

  const handleGoogleLogin = () => {
    googleLogin().then(res => {
      console.log(res.user);
    }).catch(error => {
      console.log(error);
    })
  }

  // github login 
  const handleGithubLogin = () => {
    githubLogin().then(res => {
      console.log(res.user);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="font-nunito md:max-w-screen-sm mx-auto h-screen md:h-auto lg:h-auto md:my-[2%] py-12 bg-gradient-to-r from-rose-500 to-sky-500 ">
      <h1 className="text-center font-extrabold text-slate- text-white text-4xl pb-12">
        Register Now
      </h1>
      <Typography>
        {loading ? (
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* user name */}
            <div className="flex flex-col gap-1 md:w-6/12 px-2 mx-auto">
              <label>
                <strong className="flex items-center gap-0 opacity-85 text-slate-50/95">
                  Name<span className="text-red-600">*</span>
                </strong>
              </label>
              <input
                className="border outline-none py-2 px-1"
                type="text"
                placeholder="type your name*"
                name="name"
                {...register('name', { required: true })}
                id=""
              />
              <span>
                <small>
                  <strong>
                    {errors.name && (
                      <strong className="text-red-600">
                        This field in required
                      </strong>
                    )}
                  </strong>
                </small>
              </span>
            </div>
            {/* user email */}
            <div className="flex flex-col gap-1 md:w-6/12 px-2 mx-auto">
              <label>
                <strong className="flex items-center gap-0 opacity-85 text-slate-50/95">
                  Email<span className="text-red-600">*</span>
                </strong>
              </label>
              <input
                className="border outline-none py-2 px-1"
                type="email"
                placeholder="Your email*"
                name="name"
                {...register('email', { required: true })}
                id=""
              />
              <span>
                <small>
                  <strong>
                    {errors.email && (
                      <strong className="text-red-600">
                        This field in required
                      </strong>
                    )}
                  </strong>
                </small>
              </span>
            </div>
            {/* user password */}
            <div className="flex flex-col gap-1 md:w-6/12 px-2 mx-auto">
              <label>
                <strong className="flex items-center gap-0 opacity-85 text-slate-50/95">
                  Password<span className="text-red-600">*</span>
                </strong>
              </label>
              <input
                className="border outline-none py-2 px-1"
                type="text"
                placeholder="Set a new password*"
                name="name"
                {...register('password', { required: true })}
                id=""
              />
              <span>
                <small>
                  <strong>
                    {errors.password && (
                      <strong className="text-red-600">
                        This field in required
                      </strong>
                    )}
                  </strong>
                </small>
              </span>
            </div>
            <div className="md:w-6/12 px-2  mx-auto mt-3">
              <Button
                variant="contained"
                className="w-full"
                size="medium"
                type="submit"
              >
                Register Now
              </Button>
            </div>
            <div className="md:w-6/12 w-full mx-auto mt-3 text-slate-900">
              Have an account?{' '}
              <Link
                to="/login"
                className="text-white hover:underline duration-150"
              >
                Login Now
              </Link>
            </div>
          </form>
        )}
      </Typography>
      <div className="flex items-center gap-0 md:w-6/12 px-3 mx-auto my-4">
        <div className="flex-1">
          <hr />
        </div>
        <div className="font-nunito opacity-95 text-sm text-slate-100">
          or with gmail and github{' '}
        </div>
        <div className="flex-1">
          <hr />
        </div>
      </div>
      {/* social login from button */}
      <div className="md:w-6/12 mx-auto my-4">
        <div className="px-2 py-2 font-bold flex items-center gap-3">
          <Button
            onClick={() => handleGoogleLogin()}
            className="flex flex-1 items-center gap-2"
            variant="contained"
          >
            <FaGoogle className="text-xl" /> Google
          </Button>
          <Button
            onClick={() => handleGithubLogin()}
            className="flex flex-1 items-center gap-2"
            variant="contained"
          >
            <FaGithub className="text-xl" /> Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;