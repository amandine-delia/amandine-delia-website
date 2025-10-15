import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Markdown } from '@/components/Markdown'
import { H1, H2, P, Strong } from '@/components/Text'
import { PATHS } from '@/constants/path'
import Link from 'next/link'

const faqs: { question: string; answer: string }[] = [
  {
    question: 'Combien de temps dure une séance ?',
    answer:
      '<p>La première séance dure environ 1h15 à 1h30 (bilan complet + première pratique). Les séances suivantes durent en moyenne 1 heure</p>',
  },
  {
    question: 'Est-ce que l’acupuncture fait mal ?',
    answer:
      '<p>Non. Les aiguilles utilisées sont très fines et stériles, à usage unique. La pose est généralement indolore. On peut ressentir de légers picotements, chaleur ou lourdeur : c’est signe que l’énergie circule.</p>',
  },
  {
    question: 'Dois-je me déshabiller ?',
    answer:
      'Pas nécessairement. Certaines zones (pieds, bras, jambes, dos) doivent parfois être découvertes selon la technique utilisée. Préférez des vêtements amples et confortables.',
  },
  {
    question: 'Existe-t-il des contre-indications à la MTC ?',
    answer: `<p>La Médecine Traditionnelle Chinoise est accessible à tous, enfants comme adultes, et peut accompagner de nombreuses situations. Cependant, certaines précautions existent :</p><ul><li>Les séances ne remplacent jamais une consultation médicale ni un suivi par un médecin.</li><li>Certaines techniques (moxibustion, ventouses, stimulation de points particuliers) peuvent être évitées chez la femme enceinte, en cas de fièvre, d’infections cutanées ou de fragilités particulières.</li><li>L’acupuncture est contre-indiquée sur certaines zones spécifiques et adaptée selon l’état de santé (ex. troubles de coagulation, port d’un stimulateur cardiaque).</li></ul><p>La praticienne ajuste toujours la séance en fonction de votre état et de vos besoins, en toute sécurité.</p>`,
  },
  {
    question: 'Combien de séances sont nécessaires ?',
    answer:
      '<p>Cela dépend du motif de consultation et de la personne. Parfois une séance suffit à ressentir un mieux-être, mais le plus souvent un accompagnement sur plusieurs séances est recommandé pour un rééquilibrage durable.</p>',
  },
]

export default function FaqPage() {
  return (
    <Container className="px-4 pt-8 pb-24">
      <H1 className="mb-8">Foire aux Questions</H1>

      <div className="flex flex-col gap-y-8">
        <P>
          Vous trouverez ici les réponses aux questions les plus fréquemment posées sur la Médecine
          Traditionnelle Chinoise et l&apos;acupuncture. Si vous ne trouvez pas la réponse à votre
          question, n&apos;hésitez pas à me contacter directement.
        </P>

        <div className="flex flex-col gap-y-6">
          {faqs.map(({ question, answer }, index) => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <div key={index} itemscope itemtype="https://schema.org/Question">
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <H2 customColor="text-black" className="text-lg mb-2" itemprop="name">
                {question}
              </H2>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-ignore */}
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <Markdown options={{ wrapper: props => <div itemprop="text" {...props} /> }}>
                  {answer}
                </Markdown>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg border border-ds-rose-500">
          <Strong className="text-lg mb-3 block text-ds-rose-900">
            Vous avez d&apos;autres questions ?
          </Strong>
          <P>
            N&apos;hésitez pas à me contacter pour toute question spécifique à votre situation. Je
            serai ravie de vous renseigner et de vous accompagner dans votre démarche de santé
            naturelle.
          </P>

          <Link href={PATHS.RENDEZ_VOUS}>
            <Button className="mt-6">Contacter</Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}
