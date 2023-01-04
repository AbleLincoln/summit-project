import Image from 'next/image'
import bg from '../public/header-bg.webp'
import logo from '../public/logo-summit.png'
import BackgroundImage from './backgroundImage'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={"container-fluid position-relative px-5 py-6"}>
            <BackgroundImage src={bg} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-5 col-xl-4 offset-xl-1 order-2 order-md-1">
                        <p className={styles.becomeCommunity}>
                            Become a part of our community of 10,000+ leading entrepreneurs, academics, artists, athletes, explorers, philanthropists, scientists, and beyond.
                        </p>
                    </div>
                    <div className="col-md-2 text-center order-1 order-md-2">
                        <Image src={logo} alt="Summit Logo" className="fit-contain" />
                    </div>
                </div>
            </div>
        </header>
    )
}