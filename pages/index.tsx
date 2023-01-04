import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import NewsletterForm from '../components/newsletterForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Join Summit</title>
        <meta name="description" content="Join Summit to participate in Summit Series Events, Summit Junto, and Summit Impact." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={`container-fluid pb-6 px-5 ${styles.main}`}>
        <div className="row">
          <div className='col-12 col-md-5 offset-md-1 col-xl-4 offset-xl-2 order-2 order-md-1'>
            <NewsletterForm />
          </div>

          <div className='col-12 col-md-4 col-xl-3 order-1 order-md-2'>
            <p className={styles.formAdjacentText}>
                The Summit Series community is a network of 10,000+ global makers. Join us for Summit events, programming, and experiences, from our signature events and excursions to Powder Mountain, our 10,000 acre ski resort in Northern Utah.
            </p>
            <h2 className={styles.curationProcess}>
              Our Curation Process
            </h2>
            <p className={styles.curationTop}>
              Candidates are interviewed to ensure they are:
            </p>
            <hr />
            <p className={styles.curationBody}>
              A leader in their field
            </p>
            <hr />
            <p className={styles.curationBody}>
              A warm, kind person who resonates with our principles
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2">
            <blockquote className={styles.blockquote}>
              <p>
                “There are many different networking events around the world, but Summit is unique. A merger of experiential learning, TED-style presentations, art and wellness, Summit is a hands-on, cross-disciplinary mastermind developed by the Millennial generation.”
              </p>
            </blockquote>
            <cite className={styles.cite}>— Inc Magazine</cite>
          </div>
        </div>
      </main>
    </>
  )
}
