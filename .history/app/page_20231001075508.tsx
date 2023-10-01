import Image from "next/image"

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Save More as You Shop:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> TrackAzon</span>
            </h1>
            <p className="mt-6">
              Discover a smarter way to shop online with Trackazon. Keep tabs on product prices effortlessly, so you never miss a great deal.
            </p>

            Searchbar
          </div>

          HeroCarousel
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Apple Iphone 15', 'Book', 'Sneakers'].map
          ((product) => (
            <div>{product}</div>
          )

          )}
        </div>
      </section>
    </>
  )
}

export default Home