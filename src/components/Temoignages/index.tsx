import { Accueil } from '@/api/accueil'
import { getPageData, parseJsonData } from '@/utils/fetchData'
import { H3 } from '../Text'

export const Temoignages = () => {
  const pageData = getPageData('data/pages/accueil.json')
  const { data, isError } = parseJsonData<Accueil>(pageData)

  if (isError || !data?.temoignages || data.temoignages.length === 0) {
    return null
  }

  return (
    <section id="temoignages" className="bg-ds-blue-200 py-24 px-4 mt-20">
      <div className="p-3 max-w-[1200px] mx-auto mt-20">
        <div className="text-center flex flex-col items-center">
          <H3 color="blue">Témoignages de patient·e·s</H3>
          <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
            Découvrez les avis de patient·e·s.
          </p>
        </div>
        <div className="px-4 py-8 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {data.temoignages.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-100 flex flex-col justify-between"
              >
                <div className="relative">
                  <span className="absolute -top-2 -left-2 text-4xl md:text-5xl text-ds-blue-700 font-serif opacity-50">
                    &ldquo;
                  </span>
                  <blockquote className="text-md md:text-base text-gray-700 leading-relaxed mb-4 pl-4 pr-2 pt-2 italic">
                    {testimonial.testimony}
                  </blockquote>
                  <span className="absolute -bottom-4 -right-2 text-4xl md:text-5xl text-ds-blue-700 font-serif opacity-50">
                    &rdquo;
                  </span>
                </div>
                <cite className="block text-right text-xs md:text-sm font-semibold text-ds-blue-900 mt-4 not-italic">
                  — {testimonial.personName}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
