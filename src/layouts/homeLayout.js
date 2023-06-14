import BackToTopButton from '../components/back to top/BackToTop';
import SectionIntroduction from '../components/home';
import MainNavBar from '../components/navbar';
import ButtonLog from '../components/navbar/login&signInBtn/Button';




function HomeLayout() {

  return (
    <>

      <ButtonLog/>
      <MainNavBar/>
      <SectionIntroduction/>
      <BackToTopButton/>
      
      
    </>
  );
}

export default HomeLayout;
