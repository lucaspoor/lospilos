import { useField } from "formik";

export const MyTextArea = (props: {
  name: string;
  className?: string;
  rows?: number;
}) => {
  const [field, meta] = useField(props);

  return <textarea {...field} {...props} />;
};
