import { Button, Skeleton, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';


const Register = () => {
 const { loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="font-nunito">
      <Typography>
        {loading ? (
          <Skeleton />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* user name */}
            <div className="flex flex-col gap-1 w-4/12">
              <label>
                <strong className="flex items-center gap-0 opacity-85">
                  Name<span className="text-rose-500">*</span>
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
            <div className="flex flex-col gap-1 w-4/12">
              <label>
                <strong className="flex items-center gap-0 opacity-85">
                  Email<span className="text-rose-500">*</span>
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
            <div className="flex flex-col gap-1 w-4/12">
              <label>
                <strong className="flex items-center gap-0 opacity-85">
                  Password<span className="text-rose-500">*</span>
                </strong>
              </label>
              <input
                className="border outline-none py-2 px-1"
                type="text"
                placeholder="type your name*"
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
            <div>
              <Button
                variant="contained"
                className="w-4/12"
                size="medium"
                type="submit"
              >
                Register Now
              </Button>
            </div>
          </form>
        )}
      </Typography>
    </div>
  );
};

export default Register;