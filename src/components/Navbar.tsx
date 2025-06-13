"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "./auth.context";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, isLoggedIn, loading } = useAuth();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Show loading state while checking auth
  if (loading) {
    return (
      <nav className="bg-[#FFE0D7] p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/parentcarelogo.png"
                alt="ParentCare Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold text-orange-500">
              ParentCare
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <div className="animate-pulse bg-gray-300 h-8 w-20 rounded"></div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-[#FFE0D7] p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo dan Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image
              src="/parentcarelogo.png"
              alt="ParentCare Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-bold text-orange-500">ParentCare</span>
        </Link>

        <div className="flex items-center space-x-6">
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/parent-match"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              Parent Match
            </Link>
            <Link
              href="/artikel"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              Artikel
            </Link>
            <Link
              href="/forum"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              Forum
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-orange-500 transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* Authentication Section */}
          {isLoggedIn && user ? (
            /* Account Dropdown - When User is Logged In */
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-orange-200 transition-colors"
              >
                {/* User Avatar */}
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold overflow-hidden">
                  {user.avatar ? (
                    <Image
                      src={user.avatar}
                      alt={user.nama_lengkap}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  ) : (
                    user.nama_lengkap.charAt(0).toUpperCase()
                  )}
                </div>
                <span className="hidden md:block text-gray-800 font-medium">
                  {user.nama_lengkap}
                </span>
                <svg
                  className={`w-4 h-4 text-gray-600 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold overflow-hidden">
                        {user.avatar ? (
                          <Image
                            src={user.avatar}
                            alt={user.nama_lengkap}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        ) : (
                          user.nama_lengkap.charAt(0).toUpperCase()
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {user.nama_lengkap}
                        </p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1">
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg
                        className="w-4 h-4 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      Profil Saya
                    </Link>

                    <hr className="my-1 border-gray-100" />

                    <Link
                      href="/auth/logout"
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <svg
                        className="w-4 h-4 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Keluar
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Login Button - When User is NOT Logged In */
            <div className="flex items-center space-x-3">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium"
              >
                Masuk
              </Link>
              <Link
                href="/auth/register"
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
              >
                Daftar
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-orange-200">
          <div className="flex flex-col space-y-2 pt-4">
            <Link
              href="/parent-match"
              className="text-gray-800 hover:text-orange-500 transition-colors py-2"
            >
              Parent Match
            </Link>
            <Link
              href="/artikel"
              className="text-gray-800 hover:text-orange-500 transition-colors py-2"
            >
              Artikel
            </Link>
            <Link
              href="/forum"
              className="text-gray-800 hover:text-orange-500 transition-colors py-2"
            >
              Forum
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-orange-500 transition-colors py-2"
            >
              About Us
            </Link>

            {!isLoggedIn && (
              <div className="flex flex-col space-y-2 pt-2 border-t border-orange-200">
                <Link
                  href="/auth/login"
                  className="text-gray-800 hover:text-orange-500 transition-colors py-2"
                >
                  Masuk
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors py-2 px-4 text-center"
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
