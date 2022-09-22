import { render, screen } from "@/utils/test-utils"

import PageFooter from "./PageFooter"

describe("PageFooter", () => {
  it("renders the app version", () => {
    render(<PageFooter />)

    const version = screen.getByRole("link", {
      name: /version/i,
    })

    expect(version).toBeInTheDocument()
  })
})
