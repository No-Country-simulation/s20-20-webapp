'use client'

import { usePathname } from "next/navigation";
import { Links } from "../../_lib/type";
import './RenderLinks.css'
import NavList from "../LinkList/LinkList";

export default function RenderLinks({
  links,
}:{
  links: Links;
}) {
  const path = usePathname();

  return <>
    <NavList className="nav-list" links={links} path={path} />
  </>
}