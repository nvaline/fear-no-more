import HeaderStyles from '../../styles/Header.module.css'

export default function ContactUs() {
  return (
    <div className={HeaderStyles.contactUs}>
      <div className={HeaderStyles.contactUs_block}>

      <form>

      <div className={HeaderStyles.contactUs_title}>
          Contact Us
        </div>

        <div className={HeaderStyles.contactUs_name}>
          <input id={HeaderStyles.contactUs_name} type="text" name="writeName" placeholder="Name" maxLength="50" required />
        </div>

        <div className={HeaderStyles.contactUs_email}>
          <input id={HeaderStyles.contactUs_email} type="text" name="writeEmail" placeholder="E-mail" maxLength="100" required />
        </div>

        <div className={HeaderStyles.contactUs_message}>
          <textarea id={HeaderStyles.contactUs_message}name="writeMessage" placeholder="Message" required />
        </div>

        <button type="button" className={HeaderStyles.contactUs_submit}>Send Message</button>
      </form>
      </div>
  </div>
  )
}