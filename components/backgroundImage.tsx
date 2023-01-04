import Image, { StaticImageData } from 'next/image'
import styles from '../styles/BackgroundImage.module.css'

type BackgroundImageProps = {
    src: StaticImageData
}

/**
 * Component for background images using Next's image optimization.
 * 
 * Make sure parent component has `position: relative`!
 */
export default function BackgroundImage({ src }: BackgroundImageProps) {
    return (
        <div className={styles.wrapper}>
            <Image src={src} alt="" fill sizes="100vw" className={styles.img} />
        </div>
    )
}