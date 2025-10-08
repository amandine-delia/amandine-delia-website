export const Temoignages = () => {
  return (
    <div className="px-4 py-8 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {TEMOINIGNAGES.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div className="relative">
              <span className="absolute -top-2 -left-2 text-4xl md:text-5xl text-ds-blue-700 font-serif opacity-50">
                &ldquo;
              </span>
              <blockquote className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 pl-4 pr-2 pt-2 italic">
                {testimonial.testimony}
              </blockquote>
              <span className="absolute -bottom-4 -right-2 text-4xl md:text-5xl text-ds-blue-700 font-serif opacity-50">
                &rdquo;
              </span>
            </div>
            <cite className="block text-right text-xs md:text-sm font-semibold text-ds-blue-900 mt-4 not-italic">
              — {testimonial.name}
            </cite>
          </div>
        ))}
      </div>
    </div>
  )
}

const TEMOINIGNAGES = [
  {
    name: 'Manon C.',
    testimony:
      'Cela fait 2 ans que je consulte Amandine, pour des séances d’acupuncture au début pour des insomnies puis c’est devenu un rituel mensuel, qui me fait le plus grand bien sur le plan physique et moral',
  },
  {
    name: 'Ana B.',
    testimony:
      "Je venais la voir pour gérer des douleurs liées aux crises de spondylarthrite ankylosante, maladie inflammatoire chronique diagnostiquée depuis un moment, et pour laquelle aucun traitement anti inflammatoire ne marchait. Et ça a été d'une efficacité incroyable : mes deux crises qui ont débutées depuis ont été arrêtées en seulement une séance chacune.",
  },
  {
    name: 'Lola P.',
    testimony:
      'Cela faisait plus de 40 ans que je dormais, extrêmement mal, avec de multiples réveils nocturnes. La prise de somnifères devenant problématique, j’ai fait appel à elle.  Dès la première séance, j’ai retrouvé le sommeil.',
  },
]
