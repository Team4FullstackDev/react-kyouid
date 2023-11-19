export default function NotFound() {
  return (
    <div className="error-404">
      <div className="error">
        <h1 className="number">
          4<img src="https://kyou.id/static/img/404/Dio.jpg" alt="" />4
        </h1>
        <p className="quote">
          You were expecting to explore Kyou.id, but it was me, Dio!
        </p>
        <span className="characterName">Dio Brando</span>
        <span className="series">JoJo no Kimyou na Bouken</span>
        <p className="notice">
          Halaman yang Anda cari mungkin telah dihapus atau tidak tersedia untuk
          sementara waktu.
        </p>
        <a href="/">Kembali ke Halaman Awal</a>
      </div>
    </div>
  );
}
