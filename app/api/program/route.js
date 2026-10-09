export function GET() {
  return Response.json({
    data: [
      { jenjang: "SD", fokus: "Fondasi belajar & percaya diri" },
      { jenjang: "SMP", fokus: "Konsep kuat, latihan terarah" },
      { jenjang: "SMA", fokus: "Strategi materi & persiapan ujian" },
      { jenjang: "Kuliah", fokus: "Pendampingan materi spesifik" },
    ],
    source: "demo-local",
    note: "Endpoint demonstrasi. Form konsultasi tidak menyimpan data.",
  });
}
