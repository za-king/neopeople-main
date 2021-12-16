import Link from "next/link";
import Swal from 'sweetalert2'

const successAlert = () => {
    Swal.fire({  
        title: 'Berhasil Terkirim!',  
        text: 'TERIMA KASIH SUDAH MENDAFTAR SILAHKAN CEK EMAILL ANDA',
        icon: 'success'
      }); 
}
export default function PendaftaranComp() {
  
  
  return (
    <div className="bg-[#F4F8FE] h-full w-full justify-center flex flex-col items-center">
        <div className="h-[20%]  mt-36 mb-8 w-full flex justify-end items-center flex-col">
          <div className="text-4xl font-sans font-thin">PENDAFTARAN</div>
        </div>

      <form className="w-full max-w-lg justify-items-center">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nama
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="xxxexample@gmail.com"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              NO Telepon
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="+62"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Pekerjaan
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="ex:Mahasiswa"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Alamat
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="ex:Jakarta"
            />
          </div>
        </div>
      </form>

      <Link href="/eventsPages/eventdetail/pendaftaran/buktipembayaran" passHref>
        <div className="md:flex md:items-center mb-24">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={successAlert}
            >
              Kirim
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}


