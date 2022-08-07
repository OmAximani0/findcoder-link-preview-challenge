// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Module to scrap meta data from a link
import getMetaData from "metadata-scraper"

export default async function handler(req, res) {
  const data = JSON.parse(req.body) 
  if(req.method == 'POST') {
    if(data.link) {
      await getMetaData(data.link).then((data) => {
        return res.status(200).json(data)
      }).catch(err => { 
        return res.status(400).json(err)
      })
    } else {
      return res.status(400).json({err : "Body is empty!"})
    }
  } else {
    return res.status(400).json({err : "Bad request method"})
  }
}
