function handleStatus(req, res) {
   res.status(200).json({
    status: 'Api Status V1'
  })
}

export default handleStatus;
