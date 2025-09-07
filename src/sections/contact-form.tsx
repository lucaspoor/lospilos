import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useState } from "react";
import * as Yup from "yup";
import { MyTextArea } from "./MyTextArea";

const ArticleSchema = Yup.object().shape({
  nombre: Yup.string().required("Por favor ingrese el nombre").min(3).max(100),
  email: Yup.string()
    .email("Por favor ingrese un email válido")
    .required("Por favor ingrese el email")
    .min(3)
    .max(64),
  mensaje: Yup.string()
    .required("Por favor ingrese el mensaje")
    .min(3)
    .max(512),
});

export function ContactForm({ token }: { token: string }) {
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [success, setSuccess] = useState(false);

  function submitForm(
    values: unknown,
    actions: { setSubmitting: (b: boolean) => void }
  ) {
    setSuccess(false);
    setError("");
    setEnviando(true);

    axios
      .post(`/api/contact`, values, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(() => {
        setSuccess(true);
        actions.setSubmitting(false);
        setEnviando(false);
      })
      .catch((error) => {
        setSuccess(false);
        setError(error.message);
        setTimeout(() => setError(""), 3000);
        setEnviando(false);
      });
    actions.setSubmitting(false);
  }

  function cancelar() {
    setSuccess(false);
    setEnviando(false);
    setError("");
    window.scrollTo(0, 0);
  }

  if (success)
    return (
      <div>
        <p className="my-2">Gracias por contactarnos, </p>
        <p className="my-2 font-light mb-6">
          Hemos enviado tu información, la revisararemos a la brevedad, y
          esperamos responder a todas tus inquietudes.
        </p>
        <button
          className="w-1/2 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-md hover:shadow-lg font-semibold"
          onClick={cancelar}
        >
          Continuar
        </button>
      </div>
    );
  return (
    <div className="max-w-screen-lg">
      <Formik
        initialValues={{
          nombre: "",
          mensaje: "",
          email: "",
          comentario: "",
        }}
        validationSchema={ArticleSchema}
        onSubmit={(values, actions) => {
          submitForm(values, actions);
        }}
      >
        {({ errors, touched, isValid }) => {
          return (
            <Form>
              <input type="hidden" name="comentario"></input>

              {enviando ? (
                <p className="my-4">Enviando, espere un momento...</p>
              ) : (
                <div className="mb-2">
                  <div className="form-control mb-4 w-full">
                    <div className="flex justify-between">
                      <label
                        htmlFor="nombre"
                        className="block text-sm font-medium mb-2"
                      >
                        Nombre
                      </label>
                      {errors.nombre && touched.nombre ? (
                        <span className="opacity-50  text-sm">
                          {errors.nombre}
                        </span>
                      ) : null}
                    </div>

                    <Field
                      name="nombre"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>
                  <div className="form-control mb-4 w-full">
                    <div className="flex justify-between">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      {errors.email && touched.email ? (
                        <span
                          className="opacity-50 text-sm
"
                        >
                          {errors.email}
                        </span>
                      ) : null}
                    </div>

                    <Field
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>

                  <div className="form-control mb-4 w-full">
                    <div className="flex justify-between">
                      <label
                        htmlFor="mensaje"
                        className="block text-sm font-medium mb-2"
                      >
                        Mensaje
                      </label>
                      {errors.mensaje && touched.mensaje ? (
                        <span
                          className="opacity-50 text-sm
"
                        >
                          {errors.mensaje}
                        </span>
                      ) : null}
                    </div>

                    <MyTextArea
                      name="mensaje"
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      rows={6}
                    />
                  </div>

                  <div className="flex justify-between mt-10">
                    <button
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-md hover:shadow-lg font-semibold"
                      type="submit"
                      disabled={!isValid}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              )}

              {error && <p className="text-red-500">{error}</p>}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
