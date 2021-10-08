const CLIENT_ID = '//'
const CLIENT_SECRET = '//'

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