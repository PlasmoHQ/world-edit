import { useStorage } from "@p1asm0/storage"
import { useEffect, useState } from "react"

import { StorageKey } from "~core/message"

function IndexPopup() {
  const [enable, setEnable] = useState(false)

  const designMode = useStorage(StorageKey.DesignMode, (v) => {
    setEnable(v === "on")
  })

  useEffect(() => {
    designMode.persist(enable ? "on" : "off")
  }, [enable])

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        minWidth: 240
      }}>
      <h1>World Edit</h1>
      <div>
        <input
          type="checkbox"
          onChange={(e) => setEnable(e.target.checked)}
          checked={enable}
        />{" "}
        Design Mode
      </div>
    </div>
  )
}

export default IndexPopup
