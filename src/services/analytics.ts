enum TrackingEvents {
  click_resume = "click_resume",
  click_project = "click_project",
  click_contact = "click_contact",
}

function trackCustomEvent({
  action,
  data = {},
}: {
  action: string
  data?: Record<string, unknown>
}) {
  if (typeof window !== "undefined") {
    window.gtag("event", action, { ...data })
  }
}

export function trackClickResume() {
  trackCustomEvent({
    action: TrackingEvents.click_resume,
  })
}

export function trackClickProject(
  projectName: string,
  clickType: "source code" | "live"
) {
  trackCustomEvent({
    action: TrackingEvents.click_project,
    data: {
      name: projectName,
      link: clickType,
    },
  })
}
export function trackClickContact(contact: string) {
  trackCustomEvent({
    action: TrackingEvents.click_contact,
    data: {
      name: contact,
    },
  })
}
