const sgMail = require('@sendgrid/mail')
const sgClientMail = require('@sendgrid/mail')

export default async function(req, res) {
  
  const sengrid_api_key = process.env.SENDGRID_API_KEY
  
  sgMail.setApiKey(sengrid_api_key)
  sgClientMail.setApiKey(sengrid_api_key)

  const { name, lastname, email, phone, subject } = req.body

  const content = {
    to: 'valtikorestaurante@gmail.com',
    from: 'valtikorestaurante@gmail.com',
    subject: `${subject}`,
    text: name,
    html: `<p> <b>${name}</b> <b>${lastname}</b> ha solicitado que l@ contactémos, para agendar una cita ó para más información sobre su vehículo.</p>
    <hr>
  <table border="1">
    <tr>
      <td>
       <b>Name</b>
      </td>
      <td>
      <b>Lastname</b>
      </td>
      <td>
      <b>Mail</b>
      </td>
      <td>
      <b>Phone</b>
      </td>
    </tr>
    <tr>
      <td>
        ${name}
      </td>
      <td>
        ${lastname}
      </td>
      <td>
        ${email}
      </td>
      <td>
        ${phone}
      </td>
    </tr>
</table>`
  }

  const ClientContent = {
    to: `${email}`,
    from: 'valtikorestaurante@gmail.com',
    subject: `${name}, you have a message from VALTIKO!`,
    text: name,
    html: `<p> <b>${name}</b>, has solicitado suscribirte o necesitas más información sobre nuestros servicios.</p>
    <p> Gracias por comunicarte y expresarnos interés en los servicios de <b>VALTIKO</b> </p>
    <p> En caso de que desees obtener más información, estaremos encantados de concertar una llamada o un mensaje de texto, lo más pronto posible, para cualquier consulta o cita que desee. </p>
    <p> ¡Esperamos comenzar a trabajar con usted! </p>
    <p> Y recuerda: ¡Trabajamos 24 horas al día, 7 días a la semana! </p>}`
  }

  // Send message to Company (VALTIKO) and Client
  try {
    console.log("Sending VALTIKO and Client Mails with SendGrid ...")
    await sgMail.send(content)
    await sgClientMail.send(ClientContent)
    res.status(200).send('VALTIKO & Client Message sent successfully.')

  } catch (error) {
    console.log("ERROR sending mails with SendGrid")
    console.log('ERROR', error)
    res.status(400).send('VALTIKO and Client Messages not sent.')
  }
}