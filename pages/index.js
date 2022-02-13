import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { 
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, } from '@chakra-ui/react'
import { Gradient } from 'react-gradient';
import { useState } from 'react';
export default function Home() {

  const [open, setOpen] = useState(false)
  const [x, setX] = useState(null)
  const [y, setY] = useState(null)
  const gradients = [
    ['#bd19d6', '#9a10ea'],
    ['#ff2121', '#c72ea6'],
  ];

  return (
    <Gradient
      gradients={gradients} // required
      property="background"
      duration={3000}
      angle="90deg"
    >
      <div className={styles.main}>
      <Modal isOpen={open}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lo sabía :)</ModalHeader>
          <ModalBody>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
        <div className={styles.card}
          style={{ position: "absolute", top: `${x}vh`, right: `${y}vh` }}
        >
          <Text
          sx={{textAlign: "center", fontWeight:"bold"}}
          >¿Quieres regalarme 1000 pesos?</Text>
          <div className={styles.buttons}>
            <Button
              sx={{ width: "5rem", margin: "0 2rem" }}
              colorScheme="green"
              onClick={()=>{
                setOpen(true)
              }}
            >Sí</Button>
            <Button
              sx={{ width: "5rem", margin: "0 2rem" }}
              colorScheme="red"
              onMouseOver={() => {
                let posX = Math.floor(Math.random() * 60);
                let posY = Math.floor(Math.random() * 60);
                setX(posX)
                setY(posY)
              }}
              onClick={() => {
                let posX = Math.floor(Math.random() * 60);
                let posY = Math.floor(Math.random() * 60);
                setX(posX)
                setY(posY)
              }}
            >No</Button>
          </div>
        </div>
      </div>
    </Gradient>
  )
}
