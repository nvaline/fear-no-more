import HeaderStyles from '../../styles/Header.module.css'

export default function ContactUs() {
  return (
    <div className={HeaderStyles.aboutUs}>
      <div className={HeaderStyles.aboutUs_block}>
        <h1 className={HeaderStyles.aboutUs_title}>
          About Us
        </h1>
        <h2 className={HeaderStyles.aboutUs_body}>
          We are here to provide easier method to connect people in need of help with people who are willing to help. We are here to provide easier method to connect people in need of help with people who are willing to help.
        </h2>
        <h2 className={HeaderStyles.aboutUs_address}>
          123 street Austin TX, 90000
        </h2>
        <h2 className={HeaderStyles.aboutUs_phoneNumber}>
          phone: 123-456-7890
        </h2>
        <h2 className={HeaderStyles.aboutUs_email}>
          Email: fearnomore@fearnomore.com
        </h2>
      </div>
    </div>
  )
}