import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Mathis Barré</title>
      </Head>
      <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
        <main className="max-w-lg">
          <h1 className="">
            <span className="font-bold text-3xl">Mathis Barré</span>
            <br/>
            <span className="text-xl opacity-75">Développeur web JavaScript / TypeScript</span>
          </h1>
          <p className="mt-3 text-justify">Je suis un passionné de développement web depuis l'âge de 16 ans. J'ai appris en autodidacte principalement sur <a href="https://freecodecamp.org/mathis">freeCodeCamp.org</a>.</p>
          <p className="mt-2">Professionnellement, je suis actuellement en alternance dans une équipe de 3 développeurs en charge de créer un <a href="https://dev.dev-lioncoach.com">site vitrine</a> et un <a href="https://lioncoach-espace-membre.fr">espace membre</a> pour Lion Coach.</p>
          <p className="mt-2">Scolairement, j'ai réalisé les projets <a href="https://reservia.mathisbarre.com">Reservia</a>, <a href="https://ohmyfood.mathisbarre.com">OhMyFood</a> et <a href="https://orinoco.mathisbarre.com">Orinoco</a> du parcours développeur web chez OpenClassrooms.</p>
          <p className="mt-2">A côté de tout ça, je m'implique dans la communauté des développeurs et plus précisement la communauté OpenClassrooms par la création du site <a href="https://devs.coffee">devs.coffee</a> et de vidéos sur <a href="https://www.youtube.com/channel/UCl3-1zqMl6YkRx0OQ3KwC_g">ma chaîne youtube</a></p>
          <p className="mt-2">Vous pouvez me contacter pour vos missions freelance à temps partiel (1,5j/semaines) sur <a href="https://www.malt.fr/profile/mathisbarre">malt.fr</a> ou sur <a href="mailto:contact@mathisbarre.com">contact@mathisbarre.com</a></p>
        </main>
      </div>
    </>
  )
}
