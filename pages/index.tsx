'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import DefaultLayout from "@/layouts/default";

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white dark:bg-gray-900">
        <body class="h-full">
        ```
      */}
      <DefaultLayout>
        <main className="">
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
          <div className="">azdazda</div>
        </main>
      </DefaultLayout>
    </>
  )
}
