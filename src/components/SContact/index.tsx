"use client";
import styles from "./styles.module.scss"

const index = () => {
    return (
        <section  className={ styles.contact } id="contact">
            <div className={ styles.contactContainer }>
                <div className={ styles.contactItem }>
                    <div className={ styles.contactTitle }>
                        <p>Ficou com alguma dúvida?</p>
                        <h2>FALE CONOSCO</h2>
                        <p>Não perca mais tempo e entre agora em contato com nossa equipe de especialistas. Teremos o maior prazer em ajudar você.</p>
                    </div>
                    <div className={ styles.cardContact }>
                        <p>(31)9999-9999</p>
                        <p>bethbeauty&#64;bethbeauty.com.br</p>
                        <div className={ styles.contactLocation }>
                            <h2>Visualizar no Mapa</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.292430406654!2d-43.907988800000005!3d-19.8698701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69ae3b318238d%3A0xd1539ca66b220fc3!2sR.%20Santa%20Alian%C3%A7a%2C%20465%20-%20S%C3%A3o%20Marcos%2C%20Belo%20Horizonte%20-%20MG%2C%2031920-550!5e0!3m2!1spt-BR!2sbr!4v1722444466060!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div className={ styles.contactForm }>
                    <form action="">
                        <h2>Formulario de Contato</h2>
                        <input type="text" placeholder="Nome Completo" />
                        <div className={ styles.inputGroup }>
                            <input type="text" placeholder="Celular/Whatsapp" />
                            <input type="text" placeholder="Melhor E-mail" />
                        </div>
                        <textarea name="" id=""></textarea>
                        <button type="submit" className={ styles.btnSubmit }>
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default index