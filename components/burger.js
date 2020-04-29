import { ModalContext } from '../utilities/context/modal';
import { useContext } from 'react';

const Burger = () => {
  const {
    openMenu,
    setOpenMenu,
    setOpenSearch,
    setOpenBag,
    setOpenPhotoUpload,
    setBodyScroll,
  } = useContext(ModalContext);

  return (
    <>
      <div
        open={openMenu}
        onClick={() => {
          setOpenMenu(!openMenu);
          setOpenBag(false);
          setOpenSearch(false);
          setOpenPhotoUpload(false);
          if (window.innerWidth < 576) {
            setBodyScroll(!openMenu);
          }
        }}
        className={openMenu ? 'open burger' : 'close burger'}
        aria-label='Toggle Menu'>
        <div className='burger-section' />
        <div className='burger-section' />
        <div className='burger-section' />
      </div>
      <style jsx>
        {`
          .burger {
            position: fixed;
            top: calc(5vh - 1rem);
            left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            width: 2rem;
            height: 2rem;
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            z-index: 1002;
          }
          .burger:focus {
            outline: none;
          }
          div.burger-section {
            width: 2rem;
            height: 2px;
            background: black;
            transition: all 0.3s linear;
            position: relative;
            transform-origin: 1px;
          }
          div.burger-section:first-child {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
          }
          .open.burger div.burger-section:nth-child(1) {
            transform: rotate(45deg);
          }
          .close.burger div.burger-section:nth-child(1) {
            transform: rotate(0deg);
          }
          .open.burger div.burger-section:nth-child(2) {
            opacity: 0;
            transform: translateX(20px);
          }
          .close.burger div.burger-section:nth-child(2) {
            opacity: 1;
            transform: translateX(0);
          }
          .open.burger div.burger-section:nth-child(3) {
            transform: rotate(-45deg);
          }
          .close.burger div.burger-section:nth-child(3) {
            transform: rotate(0deg);
          }
          @media (orientation: landscape) and (max-width: 900px) {
            div.burger-section {
              top: calc(5vh - 0.75rem);
              height: 1.5rem;
              width: 1.5rem;
            }
          }
          @media (max-width: 576px) {
            .burger {
              top: calc(5vh - 1rem);
              left: 15px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Burger;
