import logoVinci from './LOGO HE VINCI.png';

const Header = (props) => {
    return (
        <div>
            <img src={logoVinci} />
            <h1>{props.course}</h1>
        </div>
    )
}


export default Header