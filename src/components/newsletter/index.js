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
`

function Newsletter() {

    function createBody(apiKey, to, from, subject, html){
        const body = {
            apiKey: apiKey,
            to: to,
            from: from,
            subject: subject,
            html: html
        }
        return body;
    }

    const POST = async (body) => {
        try {
            const res = await fetch(
            'https://enviador.vercel.app/', 
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers:  {
                'Content-Type': 'application/json'
                },
            }
            );
            const resTxt = await res.text();
            //console.log(resTxt);
            alert('Obrigada por se inscrever em nosso newsletter');
        } catch (err) {
            //console.log(err);
            alert('Erro ao se inscrever no newsletter');
        }
    };
    
    const validaEmail = (e) => {
        e.preventDefault();
        const apiKey = API_KEY;
        let to = e.target.email.value;
        const from = API_EMAIL;
        const subject = "Parabéns, seu email foi enviado com node!";
        const html = "Aqui fica escrito o corpo do email<br><br>Note que tags <code>html</code> funcionam, então é possível criar mensagens bem personalizadas para seus usuários!";
        //objeto que vai ser enviado para a api
        const body = createBody(apiKey, to, from, subject, html);
        
        POST(body);
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