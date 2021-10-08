const CLIENT_ID = '287a9e325446423ea74a184d2b532384'
const CLIENT_SECRET = '96b28e26f58048508d5f10a7ea4385a3'

const baseURL = (id, secret) => `https://accounts.spotify.com/api/token?grant_type=client_credentials&client_id=${id}&client_secret=${secret}`



export default async function getSpotifyToken() {

  try {
    const response = await fetch(baseURL(CLIENT_ID, CLIENT_SECRET), {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    })
    const { access_token, token_type } = await response.json()
    return `${token_type} ${access_token}`
  } catch (error) {
    console.log(error.message)
  }





}