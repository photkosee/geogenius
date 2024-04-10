"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Map from "./components/Map";
import { Github, Info } from "lucide-react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <main
      className="flex flex-col min-h-screen max-w-full items-center justify-center
      bg-neutral-900 gap-5 p-3 lg:p-5"
    >
      <div className="flex items-center justify-center text-white gap-x-2 text-3xl font-semibold">
        <p className="text-amber-500">GeoGenius</p> Info
        <Button isIconOnly size="sm" onClick={onOpen}>
          <Info />
        </Button>
        <a href="https://github.com/photkosee" target="_blank">
          <Button isIconOnly size="sm">
            <Github />
          </Button>
        </a>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                How to use GeoGenius?
              </ModalHeader>
              <ModalBody>
                Simply click on any country on the map to get its information.
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="w-full h-full flex items-center justify-center pb-5 pr-16 bg-[#1f3540] rounded-md">
        <Map />
      </div>
    </main>
  );
}
