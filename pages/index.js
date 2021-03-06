import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import Header from "../components/UI/Header/Header"
import Mid from "../components/UI/Mid/Mid"
import More from "../components/UI/More/More"
import ModalComp from "../components/UI/Modal/ModalComp"

import styles from '../styles/Home.module.css'

export default function Home() {
  const [lang, setLang] = useState("Hin")
  const [open, setOpen] = useState(true)
  const [narrate, setNarrate] = useState(true)
  const [height, setHeight] = useState()
  const [win, setWin] = useState()
  useEffect(() => {
    setHeight(window.outerHeight)
    setWin(window)
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    window.scrollTo({
      top: 0,
      left: 0
    })
  }, []);
  const scrollToMore = () => {
    let ctr = 0
    let scroll = setInterval(() => {
      console.log(height)
      if (ctr === height) {
        clearInterval(scroll)
      }
      if (win !== undefined) {

        win.scrollTo({
          top: ctr,
          left: 0,
          behavior: 'smooth'
        });
        ctr++
      }
    }, 4);
  }
  const closeModal = (narrate) => {
    setOpen(false)
    document.getElementsByTagName('body')[0].style.overflow = 'visible'
    if (narrate) {
      scrollToMore()
    }
    setNarrate(narrate)
  }
  return (
    <div>
      <Head>
        <title>V.I.N. | Get Vaccinated Now</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      </Head>
      <ModalComp open={open} closeModal={closeModal}></ModalComp>
      <Header lang={lang} setLang={(lang) => setLang(lang)} scrollToMore={scrollToMore}></Header>
      <Mid lang={lang} scrollToMore={scrollToMore}></Mid>
      <More lang={lang}></More>
    </div>
  )
}
