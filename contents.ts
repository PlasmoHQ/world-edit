import { StorageKey } from "~core/message"
import { Storage } from "~core/storage"

const storage = new Storage()

window.addEventListener("load", async () => {
  const designModeState = await storage.get(StorageKey.DesignMode)

  document.designMode = designModeState

  if (designModeState !== "on" && designModeState !== "off") {
    storage.set(StorageKey.DesignMode, "on")
  }
})

chrome.storage.onChanged.addListener((obj) => {
  document.designMode = obj[StorageKey.DesignMode].newValue
})
