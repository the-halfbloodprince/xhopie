import Image from 'next/image'

function Header() {
    return (
        <header className="header">

            {/* Top Nav */}
            <div>
                <div>
                    <Image src="/logo.png" width={150} height={70} objectFit="contain" />
                </div>
            </div>

        </header>
    )
}

export default Header
