enum TrackingEvents {
  click_resume = "click_resume",
  click_project = "click_project",
  click_contact = "click_contact",
  click_devto = "click_devto_blog",
}

declare global {
  interface Window {
    panelbear: (category: string, action: string) => void
  }
}

function trackCustomEvent(event: string) {
  if (typeof window !== "undefined") {
    window.panelbear("track", event)
  }
}

export function trackClickResume() {
  trackCustomEvent(TrackingEvents.click_resume)
}

export function trackClickProject(
  projectName: string,
  clickType: "source code" | "live"
) {
  const event = `${TrackingEvents.click_project}.${projectName.replaceAll(
    " ",
    "_"
  )}.${clickType.replaceAll(" ", "_")}`
  trackCustomEvent(event)
}

export function trackClickContact(contact: string) {
  trackCustomEvent(
    `${TrackingEvents.click_contact}_${contact.replaceAll(" ", "_")}`
  )
}

export function trackClickDevto() {
  trackCustomEvent(TrackingEvents.click_devto)
}
