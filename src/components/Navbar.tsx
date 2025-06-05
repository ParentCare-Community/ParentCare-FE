import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#FFE0D7] p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-500">ParentCare</Link>
        <div className="space-x-4">
          <Link href="/konsultasi" className="text-gray-800 hover:text-orange-500">Konsultasi</Link>
          <Link href="/artikel" className="text-gray-800 hover:text-orange-500">Artikel</Link>
          <Link href="/forum" className="text-gray-800 hover:text-orange-500">Forum</Link>
          <Link href="/About" className="text-gray-800 hover:text-orange-500">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;