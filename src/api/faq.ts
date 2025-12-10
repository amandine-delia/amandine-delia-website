type QA = {
  question: string
  answer: string
}

type Footer = {
  title: string
  content: string
}

export type FaqData = {
  pageTitle: string
  introduction: string
  qa: QA[]
  footer: Footer
}
