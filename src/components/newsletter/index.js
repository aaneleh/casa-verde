import icon from '../../assets/email-icon.svg';
import styled from 'styled-components'

const API_KEY = process.env.REACT_APP_SG_APIKEY;
const API_EMAIL = process.env.REACT_APP_SG_EMAIL;

const Container = styled.form`
    display: inline-flex;
    height: 4em;
    background: #fff;
    img {
        width: 24px;
        margin-left: 0.5em;
        margin-right: 0.5em;
    }
    input:focus {
        outline: none;
    }
`
const Input = styled.input`
    width: 25em;
    border: none;
    background: none;

`

const ButtonNewsletter = styled.input`
    display: grid;
    align-items: center;
    height: 100%;
    width: 12em;
    background-color: #FFCB47;
    border: none;
    color: #fff;
    cursor:pointer;
    position: relative;
    z-index: 1000;
`

function Newsletter() {

    async function post(body){
/*         console.log(body); */
        fetch("https://enviador.vercel.app/", {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.text();
        }).then(function (text) {
            alert(text);
            console.log("response: ", text);
        }).catch(function (error){
            alert(error);
            console.log("error: ",error);
        })
    }

    const validaEmail = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        const body = {
            apikey: API_KEY,
            to: email,
            from: API_EMAIL,
            subject: "Bem-vindo à Casa Verde!",
            html: "Olá olá, muito obrigada por se inscrever no newsletter da Casa Verde"
        }
        post(body);
    }

    return (
        <Container className="newsletter sombra" onSubmit={validaEmail}>
            <img src={icon} alt="📧"></img>
            <Input type="text" name="email" placeholder='Insira seu e-mail'></Input>
            <ButtonNewsletter type="submit" value="Assinar Newsletter"/>
        </Container>
    );
}

export default Newsletter;