import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
        <div className="navbar bg-neutral text-neutral-content top-0 fixed z-20 pb-2">
            <div className="navbar-start  ">
                <div className="avatar m-2">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image width={100} height={100} priority alt="Logo" src={process.env.LOGO} />
                    </div>
                </div>
                <Link className="btn btn-ghost text-l" href={'/'}>Interact Club Marsa Mind</Link>
            </div>
            <div className="navbar-end lg:flex hidden">
                <Link className="btn btn-ghost" href={'/pages/'}>❓ Quoi ?</Link>
                <Link className="btn btn-ghost" href={'/pages/why'}>🆘 Pourquoi ?</Link>
                <Link className="btn btn-ghost" href={'/pages/how'}>🎬 Comment ?</Link>
                <Link className="btn btn-ghost" href={'/pages/who'}>🧑‍🤝‍🧑 Qui ?</Link>
                <Link className="btn btn-ghost" href={'/pages/when'}>🕙 Quand ?</Link>
                <Link className="btn btn-ghost" href={'/pages/utils/image'}>🖼️ Images</Link>
                <Link className="btn btn-ghost" href={'/pages/utils/contact'}>✉️ Contact</Link>
                <Link className="btn btn-ghost" href={'/pages/utils/don'}>❤️ Don</Link>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown  dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className="btn btn-ghost" href={'/pages/'}>❓ Quoi ?</Link></li>
                        <li><Link className="btn btn-ghost" href={'/pages/why'}>🆘 Pourquoi ?</Link></li>
                        <li><Link className="btn btn-ghost" href={'/pages/how'}>🎬 Comment ?</Link></li>
                        <li><Link className="btn btn-ghost" href={'/pages/who'}>🧑‍🤝‍🧑 Qui ?</Link></li>
                        <li><Link className="btn btn-ghost" href={'/pages/when'}>🕙 Quand ?</Link></li>
                        <li><Link className="btn btn-ghost" href={'/pages/utils/image'}>🖼️ Images</Link></li>
                        <li><Link className="btn btn-ghost" href={'/pages/utils/contact'}>✉️ Contact</Link></li>
                        <li><Link className="btn btn-ghost" href={'/pages/utils/don'}>❤️ Don</Link></li>
                    </ul>
                </div>
            </div>
        </div>        
    )
}

export default Navbar
