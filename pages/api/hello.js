export default function handler(req, res) {
  res.status(200).json([
    {
      "event_name": "Knowing your own inner child",
      "cover": "https://res.cloudinary.com/p3l-neopeople/image/upload/v1640837737/yeczoqgg2o9doq505ocv.jpg",
      "date" : "2021-08-23",
      "started_at" : "2021-08-23 10:10:10",
      "finish_at" : "2021-08-23 12:10:10",
      "price": 11000,
      "speaker": "Puput Rarasati, S.Psi",
      "speaker_job":"Medical Expert",
      "speaker_company":"The Lens Story dan Penulis",
      "description":"Setiap individu pernah menjadi anak-anak, dan sampai saat ini setiap individu masih memiliki kekanakan tersebut di dalam diri. Namun kebanyakan, beberapa orang dewasa tidak menyadari hal tersebut. Kurangnya hubungan kesadaran dengan Inner Child kita sendiri adalah sumber dari kesulitan perilaku, emosional, dan interpersonal pada diri. Lalu Bagaimana cara berdamai dengan Inncer Child?"
      
  }
  ]);
}
