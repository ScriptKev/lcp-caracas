import sendPrayRequest from 'utils/sendPrayRequest'

export default (req, res) => {
  if (req.method === 'POST') {
    const { name, email, prayRequest } = req.body
    sendPrayRequest(name, email, prayRequest, req, res)
  }
}