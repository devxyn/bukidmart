import { toast } from 'react-toastify';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handleError = (error: any) => {
  console.log(error);
  toast.error(error?.response?.data?.message);
};
