import { Container } from '@/components/Container'
import { H2, P, PageTitle, Strong, Ul } from '@/components/Text'

export default function TarifsPage() {
  return (
    <Container className="px-4 pt-8 pb-24">
      <PageTitle>Tarifs et modalités de paiement</PageTitle>

      <div className="flex flex-col gap-y-8">
        <div>
          <H2 className="mb-3  text-lg" customColor="text-black">
            Consultations individuelles
          </H2>
          <Ul>
            <li>
              Première séance (1h15 à 1h30) :{' '}
              <Strong>
                70 € en tarif plein puis dégressif selon les situations (revenus, patrimoine), voir
                avec votre praticienne
              </Strong>
            </li>

            <li>
              Séance de suivi (1h) : <Strong>60 €</Strong>
            </li>
          </Ul>
        </div>

        <div>
          <H2 className="mb-3  text-lg" customColor="text-black">
            Moyens de paiement acceptés
          </H2>
          <Ul>
            <li>Chèques (à l’ordre d’Amandine Delia)</li>
            <li>Espèces</li>
            <li>Virement bancaire (RIB sur demande)</li>
            <li>⚠️ Le cabinet ne prend pas la CB</li>
          </Ul>
        </div>

        <div>
          <H2 className="mb-3  text-lg" customColor="text-black">
            Facture pour remboursement mutuelle
          </H2>
          <div className="flex flex-col gap-y-3">
            <P>
              Certaines mutuelles prennent en charge une partie des séances d’acupuncture ou de
              Médecine Traditionnelle Chinoise, dans le cadre des médecines douces.
            </P>
            <P>
              Une <Strong>facture</Strong> nominative peut être délivrée à chaque séance afin de
              faciliter vos démarches de remboursement auprès de votre complémentaire santé.
            </P>

            <P>
              👉 Renseignez-vous directement auprès de votre mutuelle pour connaître les modalités
              de prise en charge des séances d&apos;acupuncture faites par une praticienne certifiée
              en médecine chinoise.
            </P>

            <P>
              Notre praticienne n&apos;est pas médecin et à ce titre, les soins ne sont pas pris en
              charge par la sécurité sociale.
            </P>
          </div>
        </div>
      </div>
    </Container>
  )
}
