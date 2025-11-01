import { useEffect } from 'react'
export default function ThemeInit(){
  useEffect(()=>{
    try{
      const t = localStorage.getItem('lv_theme')
      if(t==='dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    }catch(e){}
  },[])
  return null
}