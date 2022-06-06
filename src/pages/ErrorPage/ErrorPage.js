import { Header } from '../../components/Header/header';
import error404 from '../../assets/404error.png'
import './ErrorPage.css';
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <section className='txt-error'>
                <h1 id='bigTxt'> Ooops!</h1>
                <h2> Sorry! We can’t find the page you’re<br></br> looking for...</h2>
                <button className='go-back' onClick={() => navigate(-1)}>Go back</button>
            </section>
            <footer>
                <img src={error404} alt="error-404" id='footer'></img>
            </footer>
        </>
    );
}