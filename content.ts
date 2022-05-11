import { Storage } from "@plasmohq/storage"

import { StorageKey } from "~core/message"

const storage = new Storage()

window.addEventListener("load", async () => {
  const designModeState = await storage.get(StorageKey.DesignMode)

  document.designMode = designModeState

  if (designModeState !== "on" && designModeState !== "off") {
    storage.set(StorageKey.DesignMode, "on")
  }
})

storage.watch({
  [StorageKey.DesignMode]: (change) => {
    document.designMode = change.newValue
  }
})
