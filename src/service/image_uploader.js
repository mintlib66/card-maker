import cloudinary from 'cloudinary-react'

const cloudName = 'dmic2urq8'
const uploadPreset = 'own3mdxa'

class ImageUploader {
  async upload(file) {
    const url = 'https://api.cloudinary.com/v1_1/dmic2urq8/image/upload'
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
