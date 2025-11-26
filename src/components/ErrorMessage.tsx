import { P } from './Text'

export const ErrorMessage: React.FC = () => {
  return (
    <div className="my-3.5 flex flex-col gap-2 items-center font-semibold">
      <P>Une erreur est survenue lors du chargement des données.</P>
      <P>Veuillez réessayer plus tard.</P>
    </div>
  )
}
