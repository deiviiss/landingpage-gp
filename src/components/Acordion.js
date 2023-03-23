import { useState } from 'react'

export default function Accordion({ items }) {
  const [activeItem, setActiveItem] = useState(1)

  const handleItemClick = (itemId) => {
    console.log(itemId)
    setActiveItem((prevActiveItem) => (prevActiveItem === itemId ? null : itemId))
  }

  const AccordionItem = () => items.map((item) => (
    <div
      key={item.id} className='flex pb-10' activeitem={activeItem}
      onClick={() => handleItemClick(item.id)}
    >
      <div className='h-5 min-w-[20px] ml-10 mr-5 rounded-full bg-primary text-white font-bold text-base leading-5 text-center cursor-pointer'>{item.id}</div>
      <div className='pr-16'>
        <button
          className='text-primary font-bold text-xl leading-5 tracking-tighter text-left pb-2' type='button'
        >
          {item.title}
        </button>
        <div className={`pb-5 transition-all duration-1000 ease-in-out ${item.id === activeItem ? '' : 'hidden'}`}>
          {item.content}
        </div>
      </div>
    </div>
  ))

  return (
    AccordionItem()
  )
}
