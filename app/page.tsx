"use client"
import React, {FC, useState} from 'react'
import Heading from './utilis/Heading'

interface Props {}

const Page:FC<Props> = (props) => {
  return (
    <>
      <Heading 
        title="ELearning"
        description='ELearning is a learning Online platform'
        keywords='JavaScript, MERN, React, Wordpress'
      />
    </>
  )
}

export default Page