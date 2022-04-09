import Image from "next/image";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import Testimoni from "./Carousel";
import Program from "./Program";
const SocialLinks = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/qurro_official.id/",
    Icon: <i className="bx bxl-instagram-alt text-3xl"></i>,
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/pages/?category=your_pages&ref=bookmarks",
    Icon: <i className="bx bxl-facebook-circle text-3xl"></i>,
  },
  {
    title: "Tiktok",
    link: "https://www.tiktok.com/@qurro_official.id",
    Icon: <i className="bx bxl-tiktok text-3xl"></i>,
  },
  {
    title: "Telegram",
    link: "https://t.me/+8uC6oaM9kdEyN2Rl",
    Icon: <i className="bx bxl-telegram text-3xl"></i>,
  },
  {
    title: "WhatApp",
    link: "https://wa.me/message/TKBDWWK3XNN5F1",
    Icon: <i className="bx bxl-whatsapp text-3xl"></i>,
  },
  {
    title: "Shopee",
    link: "https://shopee.co.id/3_lqolftb3",
    Icon: <i className="bx bxl-shopify text-3xl"></i>,
  },
];
export default function What() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[1024px] px-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-20 mb-5 text-center">Apa itu Qurro_official.id</h1>
          <p className="text-gray-700 text-base text-center">
            Sebuah platform digital yang menyediakan layanan pembelajaran membaca Al-Quran dan menghafalnya kapanpun dan dimanapun. yg sangat cocok untuk membantu orang-orang yang mengkliem dirinya sebagai orang sibuk atau tidak ada guru
            ngaji dikampung halamannya. Selain itu, metode pembelajaran Al-Qur'an juga berlaku bagi para orang tua yang belum lancar mengaji, sehingga tidak perlu ragu dan malu lagi mempelajari Al Qur'an secara daring
          </p>
        </div>
      </div>
      <Why />
      <Program />
      <Testimoni />
      <Footer />
    </div>
  );
}

const Why = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 w-[1024px]">
        <p className="text-3xl sm:text-4xl md:text-5xl text-center font-[700]">Kenapa di Qurro_official.id</p>
        <div className="mt-10">
          <div className="flex justify-center flex-wrap">
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner bg-white">
              <Image src={img2} className="rounded-t-xl" height="1200px" alt="img1" />
              <div className="mt-2 px-5">
                <p className="font-bold text-xl">Pengajar</p>
                <p className="text-sm">Semua pengajar adalah lulusan pondok, jadi tidak perlu diragukan lagi kredibilitasannya.</p>
              </div>
            </div>
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner bg-white">
              <Image src={img1} className="rounded-t-xl" height="1200px" alt="img2" />
              <div className="mt-2 px-5">
                <p className="font-bold text-xl">Privat</p>
                <p className="text-sm">Sistem privat 1 on 1 sehingga lebih leluasa belajar dan bertanya langsung dengan pengajarnya.</p>
              </div>
            </div>
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner bg-white">
              <Image src={img4} className="rounded-t-xl" height="1200px" alt="img3" />
              <div className="mt-2 px-5">
                <p className="font-bold text-xl">Modul</p>
                <p className="text-sm">Dilengkapi dengan buku/materi tajwid dan makharijul huruf yg lengkap eksklusif yang ditulis oleh Abu Ya'la Kurnaedi, Lc </p>
              </div>
            </div>
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner bg-white">
              <Image src={img5} className="rounded-t-xl" height="1200px" alt="img4" />
              <div className="mt-2 px-5">
                <p className="font-bold text-xl">Waktu Fleksibel</p>
                <p className="text-sm">Peserta bisa memilih waktu sesuai kesepakatan dengan guru.</p>
              </div>
            </div>
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner bg-white">
              <Image src={img3} className="rounded-t-xl" height="1200px" alt="img5" />
              <div className="mt-2 px-5">
                <p className="font-bold text-xl">Bebas konsultasi</p>
                <p className="text-sm">Bebas berkonsultasi dengan pengajar kapan saja yang Anda mau</p>
              </div>
            </div>
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner bg-white">
              <Image src={img6} className="rounded-t-xl" height="1200px" alt="img6" />
              <div className="mt-2 px-5">
                <p className="font-bold text-xl">Biaya terjangkau</p>
                <p className="text-sm">Biaya yang terjangkau karena pembelajaran yang intensif dengan sistem privat dan jam belajar fleksibel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex justify-center bg-white mt-10">
      <footer className="dark:bg-skate-900 bg-whitew-[1024px] text-center">
        <div className="mx-auto max-w-screen-xl px-6 pt-16 sm:px-8">
          <div className="grid">
            <div className="flex flex-col">
              <span className="text-xl font-bold capitalize">QURRO_OFFICIAL.ID</span>
              <p className="mt-4 max-w-screen-xs text-sm">Sebuah platform digital belajar membaca Al-Qur'an dan menghafalnya</p>
              <div className="flex justify-center">
                <ul id="social-links" className="mt-4 flex items-center space-x-4">
                  {SocialLinks.map((item) => (
                    <li key={item.title}>
                      <a href={item.link} aria-label={item.title} className="transition-all hover:fill-indigo-800 dark:fill-white dark:hover:fill-indigo-800">
                        {item.Icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div id="copyright" className="mt-5 border-slate-600 py-4 dark:border-slate-600 border-t">
                <p className="text-center text-sm dark:text-gray">
                  Copyright &copy; 2022{" "}
                  <a href="https://github.com/yusuf0317" className="decoration-purple-100">
                    Muhamad Yusup
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
