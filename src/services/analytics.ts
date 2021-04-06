import { trackCustomEvent } from "gatsby-plugin-google-analytics"

enum TrackingEvents {
  click_resume = "click_resume",
  click_project = "click_project",
  click_contact = "click_contact",
}

export function trackClickResume() {
  trackCustomEvent({
    category: TrackingEvents.click_resume,
    action: TrackingEvents.click_resume,
  })
}

export function trackClickProject(
  projectName: string,
  clickType: "source code" | "live"
) {
  trackCustomEvent({
    category: TrackingEvents.click_project,
    action: `${projectName} - ${clickType}`,
  })
}
export function trackClickContact(contact: string) {
  trackCustomEvent({
    category: TrackingEvents.click_contact,
    action: contact
  })
}
