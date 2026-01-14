import { FaqData } from '@/api/faq'
import { Button } from '@/components/Button'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Markdown } from '@/components/Markdown'
import { PageContainer } from '@/components/PageContainer'
import { H2, P, PageTitle, Strong } from '@/components/Text'
import { PATHS } from '@/constants/path'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    "Questions fréquemment posées sur la médecine traditionnelle chinoise, l'acupuncture, les tarifs, les consultations et les remboursements.",
  keywords: [
    'faq',
    'questions',
    'médecine chinoise',
    'acupuncture',
    'remboursement',
    'mutuelle',
    'consultation',
  ],
  openGraph: {
    title: "FAQ | Médecine Traditionnelle Chinoise Marseille Amandine D'Elia",
    description:
      "Questions fréquemment posées sur la médecine traditionnelle chinoise, l'acupuncture, les tarifs, les consultations et les remboursements.",
    url: 'https://delia-acupuncture.fr/consulter/faq',
    type: 'website',
  },
}

export default function FaqPage() {
  const pageData = getPageData('data/pages/faq.json')
  const { data, isError } = parseJsonData<FaqData>(pageData)

  if (isError || !data) {
    return <ErrorMessage />
  }

  const { pageTitle, introduction, qa, footer } = data

  return (
    <PageContainer>
      <PageTitle>{pageTitle}</PageTitle>

      <div className="flex flex-col gap-y-8">
        <P>{introduction}</P>

        <div className="flex flex-col gap-y-6">
          {qa.map(({ question, answer }, index) => (
            <details key={index} className="group" itemScope itemType="https://schema.org/Question">
              <summary className="cursor-pointer list-none">
                <H2
                  color="black"
                  className="text-lg mb-2 inline-flex items-center gap-2"
                  itemProp="name"
                >
                  <span className="group-open:rotate-90 transition-transform">▶</span>
                  {question}
                </H2>
              </summary>
              <div
                className="mt-2 ml-6"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <Markdown options={{ wrapper: props => <div itemProp="text" {...props} /> }}>
                  {answer}
                </Markdown>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg border border-ds-rose-500">
          <Strong className="text-lg mb-3 block text-ds-rose-900">{footer.title}</Strong>
          <P>{footer.content}</P>

          <Link href={PATHS.RENDEZ_VOUS}>
            <Button className="mt-6">Contacter</Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  )
}
