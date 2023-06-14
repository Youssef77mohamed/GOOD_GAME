import MainNavBar from '../../components/navbar'
import ButtonLog from '../../components/navbar/login&signInBtn/Button'
import FooterBtn from '../../components/footer/FooterBtn'
import BodySignUp from '../../components/signUp'
import BackToTopButton from '../../components/back to top/BackToTop'



export default function SignUpPage() {

  return (
    <>
      <div>
      <ButtonLog/>
      <MainNavBar/>
      <BodySignUp/>
      <BackToTopButton/>
      <FooterBtn/>
      </div>

    </>
  )
}
