import { HeaderBg } from 'components/HeaderHome/styled'
import Image from 'next/image'
import Link from 'next/link'
import { Navidad } from './styled'

const ReservacionesNavidad = () => {
  return (
    <main>
      <HeaderBg>
        <Image
          src="/img/HeaderBg.webp"
          alt="headerBg"
          width={1920}
          height={1080}
          priority
          objectFit="cover"
          quality={100}
        />
      </HeaderBg>

      <Navidad.Section>
        <Navidad.Flag>
          <Link href="/">
            <a>
              <Image
                src="/img/logo.webp"
                alt="Picture of the author"
                width={80}
                priority
                height={43}
              />
            </a>
          </Link>
        </Navidad.Flag>
        <Navidad.Title>
          Pongamos la mirada en <br />
          <div>JESÚS</div>
        </Navidad.Title>

        <Navidad.HappyChristmas>
          <div>¡&nbsp;</div>
          <div>Feliz&nbsp;</div>
          <div>año&nbsp;</div>
          <div>2021&nbsp;</div>
          <div>!</div>
        </Navidad.HappyChristmas>

        <Navidad.Mark>
          la casa de mi padre
        </Navidad.Mark>
      </Navidad.Section>
    </main>
  )
}

export default ReservacionesNavidad
