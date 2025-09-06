import { useField } from "formik";

export const MyTextArea = (props: {
  name: string;
  className?: string;
  rows?: number;
}) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};
