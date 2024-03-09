import { Slide } from "react-toastify";

export const toaster = ({ duration, position, progress }) => {
  return {
    position: position || "top-right",
    autoClose: duration || 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: progress || undefined,
    theme: "light",
    transition: Slide
  };
};
