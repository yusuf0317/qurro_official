import Image from "next/image";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";

export default function Why() {
  return (
    <div className="flex justify-center">
      <div className="mt-20 w-[1024px]">
        <p className="text-3xl sm:text-4xl md:text-5xl text-center font-[700]">Mengapa di Qurro_official.id</p>
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
}
