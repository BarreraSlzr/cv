"use client"


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import useMediaQuery from "@/lib/hooks/useMediaQuery"
import { useState } from "react"
import AvatarProfile from "../avatar"
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"

export function DrawerDialog(props: React.PropsWithChildren<{
  title: string,
  description: string
}>) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const MainButton = <DialogTrigger asChild className="z-1 sticky bottom-9 md:fixed md:self-end">
    <Button className="transition ease-in-out 
    md:rounded-l-full
    delay-150 
    hover:scale-110 hover:bg-blue-900 
    duration-300
    drop-shadow-md hover:drop-shadow-xl
    flex gap-2 justify-center
    ">
      <AvatarProfile className="rounded-full overflow-hidden w-8" />
      <ChatBubbleLeftEllipsisIcon className="size-6 mb-1" />
      {props.title}
    </Button>
  </DialogTrigger>
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen} >
        {MainButton}
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {props.title}
            </DialogTitle>
            <DialogDescription>
              {props.description}
            </DialogDescription>
          </DialogHeader>
          {props.children}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      {MainButton}
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{props.title}</DrawerTitle>
          <DrawerDescription>
            {props.description}
          </DrawerDescription>
        </DrawerHeader>
        {props.children}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}


