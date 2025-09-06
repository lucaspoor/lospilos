"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { ContactForm } from "./contact-form";

export function ContactFormContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState<string>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/contact`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(JSON.stringify(error.response.data));
        setLoading(false);
      });
  }, []);

  if (loading) return <p>espere un momento...</p>;
  if (error) return <p>{error}</p>;

  if (!data) return <p>Error interno</p>;

  return <ContactForm token={data} />;
}
