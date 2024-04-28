import React from "react";
import { MainNav } from "@/components/main-nav";
import { Logo } from "@/components/logo";


export function SiteHeader() {
  return (
    <header className="absolute px-9 py-6 w-full">
      <div className="flex">
        <Logo></Logo>
        <MainNav></MainNav>
      </div> 
    </header>
  )
}