import { useState } from 'react'

const usePopup = (defaultValue: boolean = false) => {
  const [isOpen, setOpen] = useState(defaultValue)

  return {
    isOpen,
    open: () => setOpen(true),
    close: () => setOpen(false),
  }
}

export default usePopup
