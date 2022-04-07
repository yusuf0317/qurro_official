import Image from "next/image";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

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
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner">
              <Image src={img2} className="rounded-t-xl" height="1200px" alt="img1" />
              <div className="mt-2 px-5">
                <p className="font-bold text-xl">Pengajar</p>
                <p className="text-sm">Semua pengajar adalah lulusan pondok, jadi tidak perlu diragukan lagi kredibilitasannya.</p>
              </div>
            </div>
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner">
              <Image src={img1} className="rounded-t-xl" height="1200px" alt="img2" />
              <div className="mt-2 px-5">
                <p className="font-bold text-xl">Privat</p>
                <p className="text-sm">Sistem privat 1 on 1 sehingga lebih leluasa belajar dan bertanya langsung dengan pengajarnya.</p>
              </div>
            </div>
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner">
              <Image src={img4} className="rounded-t-xl" height="1200px" alt="img3" />
              <div className="mt-2 px-5">
                <p className="font-bold text-xl">Modul</p>
                <p className="text-sm">Dilengkapi dengan buku/materi tajwid dan makharijul huruf yg lengkap eksklusif yang ditulis oleh Abu Ya'la Kurnaedi, Lc </p>
              </div>
            </div>
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner">
              <Image src={img5} className="rounded-t-xl" height="1200px" alt="img4" />
              <div className="mt-2 px-5">
                <p className="font-bold text-xl">Waktu Fleksibel</p>
                <p className="text-sm">Peserta bisa memilih waktu sesuai kesepakatan dengan guru.</p>
              </div>
            </div>
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner">
              <Image src={img3} className="rounded-t-xl" height="1200px" alt="img5" />
              <div className="mt-2 px-5">
                <p className="font-bold text-xl">Bebas konsultasi</p>
                <p className="text-sm">Bebas berkonsultasi dengan pengajar kapan saja yang Anda mau</p>
              </div>
            </div>
            <div className="lg:w-[308px] md:w-[380px] sm:w-[500px] lg:h-[310px] pb-4 shadow-lg rounded-xl mx-4 mb-8 hover:translate-y-2 hover:transition-all duration-200 hover:shadow-inner">
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

const Program = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 w-[1024px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-center">Program Qurro_official.id</h1>
        <div className="flex justify-center flex-wrap">
          <div className="text-center px-5 py-5 shadow-lg lg:w-[223px] md:w-[380px] sm:w-[500px] lg:h-[300px] h-[250px] mx-4 mb-4 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white transition-all duration-1000 rounded-lg">
            <p className="text-center font-bold text-2xl my-3">Tahsin Tajwid</p>
            <p className="h-28">Melancarkan bacaan Al Qur'an dan mempelajari hukum hukumnya</p>
            <button className="lg:mt-11 mt-2 px-3 py-1 text-white rounded-md bg-gradient-to-r from-blue-600 to-blue-900 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-600">Daftar</button>
          </div>
          <div className="text-center px-5 py-5 shadow-lg lg:w-[223px] md:w-[380px] sm:w-[500px] lg:h-[300px] h-[250px] mx-4 mb-4 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white transition-all duration-1000 rounded-lg">
            <p className="text-center font-bold text-2xl my-3">Tahfidz</p>
            <p className="h-28">Menghafal Al Qur'an hafalan baru dengan target 1-2 halaman perhari</p>
            <button className="lg:mt-11 mt-2 px-3 py-1 text-white rounded-md bg-gradient-to-r from-blue-600 to-blue-900 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-600">Daftar</button>
          </div>
          <div className="text-center px-5 py-5 shadow-lg lg:w-[223px] md:w-[380px] sm:w-[500px] lg:h-[300px] h-[250px] mx-4 mb-4 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white transition-all duration-1000 rounded-lg">
            <p className="text-center font-bold text-2xl my-3">Muroja'ah</p>
            <p className="h-28">Mengulang hafalan Al Qur'an yang sudah dihafal dengan target 4-5 halaman perhari</p>
            <button className="lg:mt-11 mt-2 px-3 py-1 text-white rounded-md bg-gradient-to-r from-blue-600 to-blue-900 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-600">Daftar</button>
          </div>
          <div className="text-center px-5 py-5 shadow-lg lg:w-[223px] md:w-[380px] sm:w-[500px] lg:h-[300px] h-[250px] mx-4 mb-4 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white transition-all duration-1000 rounded-lg">
            <p className="text-center font-bold text-2xl my-3">Bahasa Arab</p>
            <p className="h-28">Mempelajari dasar dasarnya yang sangat cocok sekali bagi orang awam yg ingin mempelajarinya</p>
            <button className="lg:mt-11 mt-2 px-3 py-1 text-white rounded-md bg-gradient-to-r from-blue-600 to-blue-900 hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-600">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
