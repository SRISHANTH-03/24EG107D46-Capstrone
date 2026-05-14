import { useForm } from "react-hook-form";
import {
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  mutedText,
  linkClass,
  loadingClass,
  container,
  sectionSpacing,
} from "../styles/common";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/authStore";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { login, currentUser, loading, error, isAuthenticated } = useAuth((state) => state);

  const onUserLogin = (userCredObj) => {
    login(userCredObj);
  };

  useEffect(() => {
    if (!isAuthenticated) return;

    const destination =
      currentUser?.role === "AUTHOR"
        ? "/author-profile"
        : currentUser?.role === "ADMIN"
        ? "/admin-profile"
        : "/user-profile";

    toast.success("Login successful. Redirecting...", { duration: 1800 });
    navigate(destination);
  }, [isAuthenticated, currentUser, navigate]);

  if (loading) {
    return (
      <div className={`${container} ${sectionSpacing} flex items-center justify-center min-h-[60vh]`}>
        <div className="text-center">
          <div className="spinner"></div>
          <p className="mt-4 text-lg text-[#6e6e73]">Checking credentials...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${container} ${sectionSpacing} animate-fade-in`}>
      <div className={`${formCard} max-w-md mx-auto`}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#0066cc] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </div>
          <h1 className={formTitle}>Welcome back</h1>
          <p className={mutedText}>Sign in to your MyBlog account</p>
        </div>

        <form onSubmit={handleSubmit(onUserLogin)} className="space-y-6">
          <div className={formGroup}>
            <label className={labelClass}>Email</label>
            <input
              type="email"
              className={inputClass}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          <div className={formGroup}>
            <label className={labelClass}>Password</label>
            <input
              type="password"
              className={inputClass}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && <p className={errorClass}>{errors.password.message}</p>}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <p className="text-red-700 text-sm font-medium">{error}</p>
              </div>
            </div>
          )}

          <button type="submit" className={submitBtn}>
            Sign In
          </button>
        </form>

        <div className="text-center mt-8">
          <p className={mutedText}>
            Don't have an account?{" "}
            <NavLink to="/register" className={linkClass}>
              Create one here
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
