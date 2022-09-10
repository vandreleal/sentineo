import { render, screen } from "@/utils/test-utils"

import DrawerSettings from "./Settings"

describe("Drawer", () => {
  it("renders the drawer settings", () => {
    render(<DrawerSettings isVisible setIsVisible={jest.fn()} />)

    const heading = screen.getByRole("heading", {
      name: /Settings/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
