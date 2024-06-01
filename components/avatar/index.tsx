"use client"
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import React, { useMemo } from 'react'

type Props = React.ButtonHTMLAttributes<HTMLSpanElement> & {
    isOnline?: boolean,
    currentTime?: number
}

const AvatarProfile = (props: Props) => {
    const onlineClass = props.isOnline ? 'bg-green-500' : 'bg-indigo-400';

    return (
        <div className="relative">
            <div className={props.className}>
                <Avatar>
                    <AvatarImage
                        src="https://github.com/BarreraSlzr.png" alt="@BarreraSlzr" />
                    <AvatarFallback>EB</AvatarFallback>
                </Avatar>
                <div className="absolute size-[0.1rem] z-3 bottom-4 right-3">{props.isOnline ? '🦸' : '🕺'}</div>

            </div>
            <div className="absolute z-2 top-0 right-0">

                <span className="relative flex h-3 w-3">
                    <span className={
                        onlineClass + " animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"}>

                    </span>
                    <span className={
                        onlineClass + " relative inline-flex rounded-full h-3 w-3"}>
                    </span>

                </span>
            </div>
        </div>
    )
}

export default AvatarProfile;