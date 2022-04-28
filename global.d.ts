declare global {
  type Glossary = GlossaryItem[]
  type Settings = SettingsItem[]

  interface GlossaryItem {
    definition: string
    term: string
  }

  interface SettingsItem {
    key: string
    name: string
    options: string[]
  }
}

export {}
