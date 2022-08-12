import React, { useRef, useState } from 'react'
import Loading from './loading'

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef()
  const [isLoading, setIsLoading] = useState(false)

  const onButtonClick = e => {
    e.preventDefault()
    inputRef.current.click()
  }
  const onChange = async e => {
    setIsLoading(true)
    const uploaded = await imageUploader.upload(e.target.files[0])
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    })
    console.log(e.target)
    setIsLoading(false)
  }

  return (
    <div className="container">
      <input
        type="file"
        accept="image/*"
        name="file"
        className="input-invisible"
        ref={inputRef}
        onChange={onChange}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <button
          className={`button upload_button ${name ? 'pink' : ''}`}
          onClick={onButtonClick}
        >
          {name || 'No image file'}
        </button>
      )}
    </div>
  )
}

export default ImageFileInput
