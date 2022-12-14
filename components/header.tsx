import useMediaQuery from 'hooks/useMediaQuery';
import { useRouter } from 'next/router';
import { HighlightBoxBG2 } from './gradient-box';
import Navbar from './navbar/navbar';
import NavbarMobile from './navbar/navbar-mobile';

const Header = () => {
  const matches = useMediaQuery('(max-width: 768px)');
  const router = useRouter();

  return (
    <>
      {matches ? <NavbarMobile /> : <Navbar />}
      {router.asPath === '/' ? <HighlightBoxBG2 /> : null}
    </>
  );
};

export default Header;
