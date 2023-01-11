
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import * as Styles from './styles'
import Banner from 'public/banner.jpeg'
import { uuid } from 'lib/uuid'
import Image from 'next/image'
import { useMemo } from 'react'

const images = Array(9)
  .fill(1)
  .map(() => Banner)


const animation = { duration: 5000, easing: (t: any) => t }

export function HeroCarousel () {
  const [slideImageRef] = useKeenSlider()

  const renderImages = useMemo(() => images?.map((value) => (
    <div className="keen-slider__slide" key={uuid()}>
      <Styles.Figure>
        <Image
          src={value}
          alt="banner"
          fill
        />
      </Styles.Figure>

    </div>
  )), []);

  return (
    <Styles.Container>
      <Styles.Banner>
        <div ref={slideImageRef} className="keen-slider">{renderImages}</div>
      </Styles.Banner>
    </Styles.Container>
  )
}