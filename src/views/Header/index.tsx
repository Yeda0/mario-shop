import './style.scss'
import MarioImg from '../../assets/images/mainMario.svg'
export function Header() {
    return(
        <div className="onBoarding">
          <header>
            <div className="logo">MARIO NFT</div>
            <div className='header-icon'> x itens</div>
          </header>

          <div className='main'>
            <h1>Explore os melhores itens <br /> colecionáveis de Mario</h1>
            <img width={400} height={400} src={MarioImg} alt="" />
          </div>
        </div>
    )
} 