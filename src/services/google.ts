export const GoogleService = {
  async getUserInfo (token = '') {
    if (!token) return

    try {
      const response = await fetch(
        'https://www.googleapis.com/userinfo/v2/me',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      return await response.json()
    } catch (error) {
      return null
    }
  }
}
