/* eslint-disable @next/next/no-img-element */
import AcquisLogo from "@assets/acquis-logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between py-4">
          <img src={AcquisLogo.src} className="h-10" alt="Acquis Logo" />
        </div>
      </div>
    </nav>
  );
}
