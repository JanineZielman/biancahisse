import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ListSlice} ListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ListSlice>} ListProps
 * @param { ListProps }
 */
const List = ({ slice }) => {
  return(
    <section className='list'>
      <h2>{slice.primary.title}</h2>
      <div className='list-items'>
        {slice.items.map((item, i) => {
          return(
            <>
            {item.link.url ?
              <PrismicLink field={item.link} className='list-item'>
                <span>{item.text}</span>
                <span>{item.year}</span>
              </PrismicLink>
            :
              <div className='list-item'>
                <span>{item.text}</span>
                <span>{item.year}</span>
              </div>
            }
            </>
          )
        })}
      </div>
    </section>
  )
}

export default List