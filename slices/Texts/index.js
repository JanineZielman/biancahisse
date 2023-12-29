import React from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.TextsSlice} TextsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextsSlice>} TextsProps
 * @param { TextsProps }
 */
const Texts = ({ slice }) => {
  console.log(slice)
  return(
    <section className='texts-page'>
      {slice.items.map((item,i) => {
        return(
          <PrismicLink field={item.link} className='texts-item'>
            <div className='bg'></div>
            <h2>{item.title},</h2>
            <h3>{item.subtitle}</h3>
            <h3>{item.year}</h3>
          </PrismicLink>
        )
      })}
    </section>
  )
}

export default Texts