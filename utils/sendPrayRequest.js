import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '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')

const sendPrayRequest = async (name, email, prayRequest, req, res) => {
  const msg = {
    to: 'lcpcaracas@gmail.com',
    from: 'script.kev@gmail.com',
    subject: `Peticion de Oración - ${name}`,
    html:
      `Nombre: ${name} - Email: ${email}
      <br/> <br/>
      ${prayRequest}`
  }

  sgMail
    .send(msg)
    .then(() =>
      res.status(200)
        .json({ message: 'Peticion enviada!', name: req.body.name, email: req.body.email })
    )
    .catch((err) => {
      console.error(err)
      res.status(500)
        .json({ message: 'Error' })
    })

}
export default sendPrayRequest