import { Container } from '@/components/Container'
import { H1, Ol, P, Strong, Ul } from '@/components/Text'

export default function PremierRendezVousPage() {
  return (
    <Container className="px-4 pt-8 pb-24">
      <H1 className="mb-8">Première séance de Médecine Traditionnelle Chinoise</H1>

      <div className="flex flex-col gap-y-8">
        <P>
          Une première séance en Médecine Traditionnelle Chinoise est avant tout un temps d’écoute
          et de découverte. Elle permet de mieux comprendre qui vous êtes dans votre globalité – sur
          le plan physique, émotionnel et énergétique – afin d’élaborer un accompagnement adapté à
          vos besoins.
        </P>

        <Ol>
          <li>
            <Strong>L’entretien (anamnèse)</Strong>
            <P>
              La séance débute par un échange approfondi. Nous discutons de votre motif de
              consultation, de vos antécédents médicaux, de votre hygiène de vie, de votre sommeil,
              de votre digestion, de vos émotions et de vos habitudes alimentaires. Chaque élément a
              son importance, car en MTC tout est relié.
            </P>
          </li>

          <li>
            <Strong>Les observations spécifiques</Strong>
            <P>Pour affiner le bilan énergétique, plusieurs outils sont utilisés :</P>

            <Ul>
              <li>
                <Strong>La prise des pouls chinois :</Strong> il s’agit de ressentir la qualité de
                l’énergie dans différents méridiens, à travers plusieurs positions du poignet.
              </li>

              <li>
                <Strong>L’observation de la langue :</Strong> sa couleur, sa forme, son enduit
                donnent des indications précieuses sur l’état des organes internes.
              </li>

              <li>
                <Strong>L’observation générale :</Strong> teint, voix, respiration, posture, regard
                – autant de signes qui révèlent l’équilibre énergétique.
              </li>
            </Ul>
          </li>

          <li>
            <Strong>Le bilan énergétique</Strong>
            <P>
              À partir de toutes ces informations, un premier bilan est établi. Ce bilan ne remplace
              pas un diagnostic médical : il s’agit d’une lecture énergétique de votre état global
              selon les principes du yin-yang, des Cinq Éléments et de la circulation du Qi.
            </P>
          </li>

          <li>
            <Strong>Le traitement personnalisé</Strong>
            <P>
              En fonction de ce bilan, une ou plusieurs techniques de MTC peuvent être proposées :
            </P>

            <Ul>
              <li>
                <Strong>Acupuncture :</Strong> stimulation de points précis à l’aide de fines
                aiguilles (stériles et à usage unique).
              </li>

              <li>
                <Strong>Moxibustion :</Strong> utilisation de chaleur douce par la combustion
                d’armoise, pour tonifier l’énergie.
              </li>

              <li>
                <Strong>Massage Tuina :</Strong> massage thérapeutique chinois pour libérer les
                blocages et relancer la circulation énergétique.
              </li>

              <li>
                <Strong>Diététique chinoise :</Strong> conseils alimentaires adaptés à votre terrain
                et à la saison.
              </li>

              <li>
                <Strong>Qi Gong thérapeutique :</Strong> exercices doux de respiration et de
                mouvement pour renforcer l’énergie vitale. et à la saison.
              </li>
            </Ul>
          </li>

          <li>
            <Strong>Un accompagnement personnalisé</Strong>
            <P>
              La première séance permet souvent de ressentir déjà un mieux-être. Selon la nature de
              votre demande, un suivi peut être proposé sur plusieurs séances afin d’accompagner le
              processus de rééquilibrage.
            </P>
          </li>
        </Ol>

        <P>
          Chaque consultation se déroule dans un cadre bienveillant, respectueux et confidentiel. Le
          but est de vous aider à retrouver harmonie, vitalité et autonomie dans votre santé au
          quotidien.
        </P>
      </div>
    </Container>
  )
}
