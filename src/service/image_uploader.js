import cloudinary from 'cloudinary-react'

const cloudName = process.env.REACT_APP_CLOUD_NAME
const uploadPreset = process.env.REACT_APP_CLOUD_UPLOAD_PRESET

class ImageUploader {
  async upload(file) {
    const url = process.env.REACT_APP_CLOUD_URL
    const formData = new FormData()

    formData.append('file', file)
    formData.append('upload_preset', uploadPreset)

    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    return await res.json()
  }
}
export default ImageUploader
