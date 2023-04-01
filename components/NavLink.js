import Link from "next/link";
import React from "react";

export default function NavLink({
    href,
    children,
    prefertch = true,
    replace = false,
    scroll = true,
    shallow = false,
    locale = true,
    ...props
}) {
    return (
        <>
            <Link href={href}>
                <a {...props}>{children}</a>
            </Link>
        </>
    );
}
