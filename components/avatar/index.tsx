"use client"
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLSpanElement>

const AvatarProfile = (props: Props) => {
    return (
        <div className="relative">
            <div className={props.className}>
                <Avatar>
                    <AvatarImage
                        src="https://github.com/BarreraSlzr.png" alt="@BarreraSlzr" />
                    <AvatarFallback>EB</AvatarFallback>
                </Avatar>
            </div>
            <div className="absolute top-0 right-0">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
            </div>
        </div>

    )
}

export default AvatarProfile;