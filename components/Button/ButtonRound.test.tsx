import { Book } from "@geist-ui/icons"

import { render, screen } from "@/utils/test-utils"

import ButtonRound from "./ButtonRound"

describe("Button", () => {
  it("renders a round button with text Glossary", () => {
    render(
      <ButtonRound
        auto
        aria-label="Glossary"
        icon={<Book />}
        onClick={jest.fn()}
      />
    )

    const button = screen.getByRole("button", {
      name: /Glossary/i,
    })

    expect(button).toBeInTheDocument()
  })
})
