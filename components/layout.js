import Link from 'next/link';

export default function Layout({children}) {
  return (
    <>
      <header className="w-full flex">
        <div className=" my-7">
          <Link href="/">
            <a className="cursor-pointer"><img src="/images/CatwikiLogo.svg" alt="logo" />  </a>
          </Link> 
        </div>
      </header>
      <main>{children}</main>
      <footer className="w-full px-4 lg:px-28 rounded-t-footer h-32 bg-black flex flex-col justify-center md:flex-row md:justify-between md:items-center">
        <div>
          <img src="/images/CatwikiWhiteLogo.svg" className="white-logo" alt="logo" />
        </div>
        <span className=" text-xs md:text-base text-white">Created by Carlos Mejía (Meca) - devchallenges.io 2021</span>
      </footer>
    </>
  );
}