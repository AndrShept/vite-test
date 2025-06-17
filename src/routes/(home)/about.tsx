import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/(home)/about')({
  component: About,
  beforeLoad({context}) {
    console.log(context.auth)
  },
})

function About() {
  const [isShow , setIsShow ] =useState(false)

  useEffect(()=> {
    if(isShow){
      console.log('show')
    }
  }, [isShow])
  return <div className="p-2">Hello from About!
  
  <Button onClick={()=> setIsShow(prev =>!prev)}>
    GP
  </Button>
  </div>
}