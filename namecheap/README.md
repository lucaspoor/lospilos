Enviar un email profesional de contacto es una operación compleja, probablemente una de las más difíciles de programar, ya que involucra múltiples aspectos importantes.

El primer paso es contar con un servicio de correo vinculado al dominio; en nuestro caso utilizamos Namecheap que cuesta USD11 anuales.
Uno de los principales desafíos es el spam. No podemos publicar un formulario de contacto que sea fácilmente “spameable”. Por ello, es fundamental implementar un sistema robusto de detección de spam; en nuestro caso, para poder enviar email es necesario primero obtener token de seguridad con una duración de 15 minutos por defecto.

En segundo lugar, debemos considerar la experiencia del usuario al completar el formulario. Lo ideal es que sea un proceso responsivo, con validación de campos en tiempo real y feedback inmediato al usuario. Para esto utilizamos herramientas como Formik y Yup, que facilitan la interacción y reducen errores.

En tercer lugar, una vez que recibimos el correo, debemos gestionar correctamente la notificación tanto al usuario que realiza la consulta como al administrador de la organización. Para asegurar un buen delivery, utilizamos un servicio especializado de SMTP, SMTP2GO.

Es importante que el correo origen que enviamos al cliente pueda recibir respuestas, ya que es común que los clientes continúen la conversación. Namecheap nos facilita esta gestión.

Finalmente, los correos que enviamos deben estar bien formateados y ser responsivos. Dado que nuestro stack está basado en React, no tiene sentido programar HTML puro para cada email. Por ello, utilizamos @react-email, que nos permite crear componentes reutilizables, garantizando una visualización correcta en móviles y navegadores.
