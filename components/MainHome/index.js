import { useContext } from 'react'
import Image from 'next/image'
import { ModalContext } from 'context/ModalContext'
import { FirstSectionBg, FirstSectionStyled, PraySectionBg, PraySectionStyled } from './styled'

const MainHome = () => {
  const [openModal] = useContext(ModalContext)

  return (
    <main>
      <FirstSectionStyled>
        <FirstSectionBg>
          <Image
            src="/img/Pared-Ladrillos-min.webp"
            alt='#Quedate En Casa'
            width={1920}
            height={1080}
            priority
            objectFit="cover"
            quality={100}
          />
        </FirstSectionBg>
        <div className="main__container">
          <div className="main__mainText">
            <h2>
              <div className="enphasis">#</div>
              <div>Quédate</div>
              <div className="enphasis">En</div>
              <div>Casa</div>
            </h2>
          </div>
        </div>
      </FirstSectionStyled>

      <PraySectionStyled>
        <PraySectionBg>
          <Image
            src="/img/Oracion-min.webp"
            alt='Peticion de oración'
            width={1920}
            height={1080}
            priority
            objectFit="cover"
            quality={100}
          />
        </PraySectionBg>
        <div className="home__pray--CTA">
          <button onClick={() => openModal()}>
            Peticiones
            {/* <span className="tiptext">En Construcción</span> */}
          </button>
        </div>

        <div className="home__pray--title">
          <h2>
            Queremos <br />
            <div style={{ color: '#FFC000', display: 'inline-block' }}>
              orar
            </div>{' '}
            por ti
          </h2>
        </div>

        <div className="home__pray--versicle">
          <p style={{ textAlign: 'center' }}>
            "Y esta es la confianza que tenemos en él, que si pedimos <br />
            alguna cosa conforme a su voluntad, él nos oye".{' '}
            <span style={{ color: '#FFC000' }}>1Jn. 5:14</span>
          </p>
        </div>
      </PraySectionStyled>
    </main>
  )
}

export default MainHome