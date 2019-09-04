import React, { useState } from 'react'
import Spinner from './Spinner.svg'
import axios from 'axios'

const Goat = () => {
  const BASE_URL = 'https://placegoat.com'
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(200)
  const [daring, setDaring] = useState(false)
  const [loading, setLoading] = useState(false)
  const [displayWarning, setDisplayWarning] = useState(false)
  const [img, setImg] = useState(null)

  const fetchGoat = async () => {
    // Check if width is specify or not, if not
    if (width === '') {
      setDisplayWarning(true)
      return
    } else {
      setDisplayWarning(false)
    }
    // setLoading(true)
    let url = ''
    if (daring) {
      url = `${BASE_URL}/goatse/${width}`
    } else {
      url = `${BASE_URL}/${width}`
    }
    // If height is provided
    if (height !== '') url += `/${height}`

    // await axios.get(url)
    setImg(url)
    // setLoading(false)
  }

  return (
    <div>
      <label htmlFor="width">Width:</label>
      {displayWarning && (
        <span
          style={{
            marginLeft: '10px',
            color: 'red',
            fontWeight: 'bold',
            textDecoration: 'underline'
          }}
        >
          Hey! give me a width!!!
        </span>
      )}
      <input
        type="number"
        value={width}
        onChange={e => setWidth(e.target.value)}
      />
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <label htmlFor="width">Feeling daring?</label>
      <input
        type="checkbox"
        checked={daring}
        onChange={e => setDaring(e.target.checked)}
      />
      <input type="button" value="Give me a goat" onClick={fetchGoat} />
      <img src={img} alt="" />
    </div>
  )
}

export default Goat
