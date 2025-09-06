import React from 'react';
import { Text, Html } from '@react-email/components';
import { DatosContacto } from '@komplaints/api-interfaces';

export function EmailOrganizacion({ contacto }: { contacto: DatosContacto }) {
  return (
    <Html>
      <Text>Nuevo contacto</Text>

      <Text>Se ha ingresado un nuevo contacto al sistema:</Text>

      <Text>{contacto.nombre}</Text>
      <Text>{contacto.email}</Text>
      <Text>{contacto.mensaje}</Text>

      <p>
        Atte,
        <br /> Komplaints
      </p>
    </Html>
  );
}
