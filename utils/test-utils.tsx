import { FC, ReactElement, ReactNode } from "react"

import { CssBaseline, GeistProvider } from "@geist-ui/core"
import { render, RenderOptions } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import GlobalStyle from "styles/global"

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <RecoilRoot>
      <GeistProvider themeType="light">
        <CssBaseline />
        <GlobalStyle />
        {children}
      </GeistProvider>
    </RecoilRoot>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }
