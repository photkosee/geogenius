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
import { Github, Info, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";
import Link from "next/link";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <div
        className="absolute left-1 bottom-1 md:left-3 md:bottom-3
        flex gap-2 md:gap-3"
      >
        <Button
          isIconOnly
          size="sm"
          aria-label="zoom in"
          onClick={() => zoomIn()}
        >
          <ZoomIn />
        </Button>
        <Button
          isIconOnly
          size="sm"
          aria-label="zoom out"
          onClick={() => zoomOut()}
        >
          <ZoomOut />
        </Button>
        <Button
          isIconOnly
          size="sm"
          aria-label="reset transform"
          onClick={() => resetTransform()}
        >
          <RotateCcw />
        </Button>
      </div>
    );
  };

  return (
    <main
      className="flex flex-col min-h-screen max-w-full items-center justify-center
      bg-neutral-900 gap-5 p-3 lg:p-5"
    >
      <div
        className="flex items-center justify-center text-white
        gap-x-2 text-3xl font-semibold"
      >
        <p className="text-amber-500">GeoGenius</p> Info
        <Button isIconOnly size="sm" onClick={onOpen}>
          <Info />
        </Button>
        <Link
          href="https://github.com/photkosee/geogenius"
          target="_blank"
          className="flex h-full items-center justify-center"
          passHref
        >
          <Button isIconOnly size="sm">
            <Github />
          </Button>
        </Link>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-black">
                How to use GeoGenius?
              </ModalHeader>
              <ModalBody className="text-black">
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

      <div
        className="w-full h-full flex items-center justify-center
        bg-[#1f3540] rounded-md relative max-w-7xl"
      >
        <TransformWrapper>
          <TransformComponent>
            <Map />
          </TransformComponent>
          <Controls />
        </TransformWrapper>
      </div>
    </main>
  );
}
