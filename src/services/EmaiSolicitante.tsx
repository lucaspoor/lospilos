import React from 'react';
import { Html, Text } from '@react-email/components';

export function EmaiSolicitante({ contacto }: { contacto: any }) {
  if (!contacto) return <Text>Error, no viene la contacto</Text>;

  return (
    <Html>
      <Text>Estimado {contacto.nombre},</Text>

      <Text>Hemos recibido tu información.</Text>

      <Text>
        Lo atenderemos a la brevedad para brindarte la mejor respuesta de
        acuerdo a tus requerimientos.
      </Text>

      <Text></Text>
      <div>
        Atte,
        <br /> Servicio al Cliente
        <br /> Komplaints
      </div>
    </Html>
  );
}

export default EmaiSolicitante;
