"use client"
import React, {FC, useState} from 'react'
import Heading from './utilis/Heading'
import { Header } from './components/Header'


interface Props {}

const Page:FC<Props> = (props) => {
  const [ open, setOpen ] = useState(false)
  const [ activeItem, setActiveItem ] = useState(0)
  return (
    <>
      <Heading 
        title="ELearning"
        description='ELearning is a learning Online platform'
        keywords='JavaScript, MERN, React, Wordpress'
      />
      <Header
        open = {open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
    </>
  )
}

export default Page