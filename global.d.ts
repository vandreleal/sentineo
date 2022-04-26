declare global {
  type Glossary = GlossaryItem[]

  interface GlossaryItem {
    definition: string
    term: string
  }
}

export {}
