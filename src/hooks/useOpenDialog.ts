import { useState } from 'react'

function useOpenDialog() {
  const [openDialog, setOpenDialog] = useState<Function>(Function)

  const openDialogCallback = (cb: Function) => {
    setOpenDialog(() => cb)
  }

  return [openDialog, openDialogCallback]
}

export default useOpenDialog
