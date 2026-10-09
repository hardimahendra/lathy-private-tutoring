"use client";

import Image from "next/image";
import { useState } from "react";

const programs = [
  {
    id: "sd",
    label: "SD",
    title: "Fondasi yang menyenangkan",
    copy: "Bantu anak memahami konsep dasar dengan sesi yang ringan, teratur, dan penuh apresiasi.",
    subjects: ["Matematika", "Bahasa Indonesia", "Bahasa Inggris"],
  },
  {
    id: "smp",
    label: "SMP",
    title: "Mulai menemukan cara belajarnya",
    copy: "Tutor memetakan kesulitan pelajaran dan membangun kebiasaan belajar yang lebih mandiri.",
    subjects: ["Matematika", "IPA", "Bahasa Inggris"],
  },
  {
    id: "sma",
    label: "SMA",
    title: "Belajar dengan arah yang jelas",
    copy: "Materi, latihan, dan strategi disusun sesuai target akademik maupun persiapan ujian.",
    subjects: ["Matematika", "Fisika", "Kimia", "Biologi"],
  },
  {
    id: "kuliah",
    label: "Kuliah",
    title: "Pendampingan untuk materi spesifik",
    copy: "Sesi privat untuk membedah mata kuliah, tugas, atau proyek yang perlu teman berpikir.",
    subjects: ["Statistika", "Pemrograman", "Akuntansi"],
  },
];

const packages = [
  {
    name: "Rutin",
    sessions: "6 sesi / bulan",
    price: "Rp500.000",
    note: "Untuk ritme belajar yang stabil",
  },
  {
    name: "Fleksibel",
    sessions: "Per sesi",
    price: "Rp100.000",
    note: "Atur jadwal sesuai kebutuhan",
    featured: true,
  },
  {
    name: "Intensif",
    sessions: "12 sesi / bulan",
    price: "Rp1.000.000",
    note: "Untuk target yang lebih dekat",
  },
];

const faqs = [
  {
    question: "Bagaimana tutor dipasangkan dengan pelajar?",
    answer:
      "Kami mulai dari jenjang, mata pelajaran, target, dan cara belajar. Pencocokan tutor pada demo ini ditampilkan sebagai alur layanan, bukan proses pemesanan aktif.",
  },
  {
    question: "Apakah bisa mulai dari satu sesi?",
    answer:
      "Bisa. Paket Fleksibel dirancang untuk mencoba ritme dan pendekatan sebelum menentukan jadwal rutin.",
  },
  {
    question: "Apakah sesi tersedia online dan tatap muka?",
    answer:
      "Keduanya tersedia sebagai pilihan konsep. Ketersediaan tutor dan lokasi perlu dikonfirmasi sebelum layanan dijalankan.",
  },
];

function Icon({ name }) {
  const paths = {
    arrow: "M5 12h13M13 6l6 6-6 6",
    check: "M5 12l4 4L19 6",
    menu: "M4 7h16M4 12h16M4 17h16",
    close: "M6 6l12 12M18 6L6 18",
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name]} />
    </svg>
  );
}

export default function LathyLanding() {
  const [program, setProgram] = useState(programs[1]);
  const [drawer, setDrawer] = useState(false);
  const [notice, setNotice] = useState("");
  const [form, setForm] = useState({ name: "", level: "SMP", mode: "Online", package: "Fleksibel" });
  const [sessionCount, setSessionCount] = useState(4);
  const [sent, setSent] = useState(false);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDrawer(false);
  };
  const submit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    if (!form.name.trim()) { setNotice("Nama pelajar perlu diisi."); setSent(true); return; }
    setSent(true);
    setNotice(
      `Terima kasih${form.name ? `, ${form.name}` : ""}. Pilihan ${form.package} (${form.mode}) tersimpan hanya di tampilan ini; data tidak dikirim.`,
    );
  };

  return (
    <main>
      <header className="nav-wrap">
        <a className="brand" href="#beranda" aria-label="Lathy Private beranda">
          <span>l</span>lathy<em>private</em>
        </a>
        <nav
          className={drawer ? "nav open" : "nav"}
          aria-label="Navigasi utama"
        >
          <button onClick={() => scrollTo("program")}>Program</button>
          <button onClick={() => scrollTo("cara-kerja")}>Cara belajar</button>
          <button onClick={() => scrollTo("paket")}>Paket</button>
          <button className="nav-cta" onClick={() => scrollTo("konsultasi")}>
            Konsultasi gratis <Icon name="arrow" />
          </button>
        </nav>
        <button
          className="menu"
          aria-label={drawer ? "Tutup navigasi" : "Buka navigasi"}
          onClick={() => setDrawer(!drawer)}
        >
          <Icon name={drawer ? "close" : "menu"} />
        </button>
      </header>

      <section id="beranda" className="hero">
        <div className="hero-image">
          <Image
            src="/images/study-room.jpg"
            alt="Sudut ruang belajar dengan lampu hangat"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 52vw"
          />
        </div>
        <div className="hero-copy">
          <p className="kicker">LES PRIVAT · ONLINE & TATAP MUKA</p>
          <h1>
            Setiap anak punya <i>cara</i> untuk tumbuh.
          </h1>
          <p className="lede">
            Lathy Private mempertemukan pelajar dengan tutor yang membantu
            mereka paham, bukan sekadar hafal.
          </p>
          <div className="hero-actions">
            <button
              className="button dark"
              onClick={() => scrollTo("konsultasi")}
            >
              Mulai konsultasi <Icon name="arrow" />
            </button>
            <button className="text-link" onClick={() => scrollTo("program")}>
              Lihat program <span>↓</span>
            </button>
          </div>
          <div className="proof">
            <div>
              <strong>1 : 1</strong>
              <span>pendampingan personal</span>
            </div>
            <div>
              <strong>4 jenjang</strong>
              <span>belajar sesuai tahap</span>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="program-section">
        <div className="section-head">
          <p className="kicker">PILIH TITIK MULAI</p>
          <h2>
            Belajar terasa lebih ringan ketika <i>arahnya</i> jelas.
          </h2>
        </div>
        <div className="program-layout">
          <div
            className="program-tabs"
            role="tablist"
            aria-label="Jenjang belajar"
          >
            {programs.map((item) => (
              <button
                role="tab"
                aria-selected={program.id === item.id}
                key={item.id}
                onClick={() => setProgram(item)}
              >
                <span>{item.label}</span>
                <Icon name="arrow" />
              </button>
            ))}
          </div>
          <article className="program-card">
            <p className="card-number">{program.label} / 04</p>
            <h3>{program.title}</h3>
            <p>{program.copy}</p>
            <div className="subjects">
              {program.subjects.map((subject) => (
                <span key={subject}>{subject}</span>
              ))}
            </div>
            <button
              className="text-link card-link"
              onClick={() => scrollTo("konsultasi")}
            >
              Tanyakan kebutuhan belajar <Icon name="arrow" />
            </button>
          </article>
        </div>
      </section>

      <section id="cara-kerja" className="method">
        <div className="method-intro">
          <p className="kicker">BUKAN SEKADAR JADWAL</p>
          <h2>Ruang kecil untuk kemajuan yang besar.</h2>
          <p>
            Setiap sesi dirancang sebagai percakapan: tutor mendengar, memetakan
            kebutuhan, lalu menemani pelajar mencoba sendiri.
          </p>
        </div>
        <ol>
          <li>
            <b>01</b>
            <div>
              <h3>Ceritakan kebutuhannya</h3>
              <p>Pilih jenjang, pelajaran, dan ritme yang paling nyaman.</p>
            </div>
          </li>
          <li>
            <b>02</b>
            <div>
              <h3>Temukan tutor yang cocok</h3>
              <p>
                Kami mencocokkan pendekatan belajar, bukan hanya mata pelajaran.
              </p>
            </div>
          </li>
          <li>
            <b>03</b>
            <div>
              <h3>Mulai dari satu sesi</h3>
              <p>Amati prosesnya dan atur kembali bila kebutuhan berubah.</p>
            </div>
          </li>
        </ol>
      </section>

      <section id="paket" className="package-section">
        <div className="section-head">
          <p className="kicker">PAKET BELAJAR</p>
          <h2>
            Pilih ritme. Sisanya kita <i>susun bersama.</i>
          </h2>
        </div>
        <div className="packages">
          {packages.map((item) => (
            <article
              key={item.name}
              className={item.featured ? "package featured" : "package"}
            >
              {item.featured && <span className="badge">PALING FLEKSIBEL</span>}
              <h3>{item.name}</h3>
              <p>{item.sessions}</p>
              <strong>{item.price}</strong>
              <small>{item.note}</small>
              <button
                onClick={() => {
                  setForm({ ...form, package: item.name });
                  scrollTo("konsultasi");
                }}
              >
                Pilih paket <Icon name="arrow" />
              </button>
            </article>
          ))}
        </div>
        <div className="session-calculator">
          <label htmlFor="session-count">Jika memilih sesi fleksibel: {sessionCount} sesi / bulan</label>
          <input id="session-count" type="range" min="1" max="12" value={sessionCount} onChange={(event) => setSessionCount(Number(event.target.value))} />
          <output>Estimasi Rp{new Intl.NumberFormat("id-ID").format(sessionCount * 100000)} / bulan</output>
          <small>Hitungan ilustratif berdasarkan Rp100.000 per sesi; belum termasuk biaya perjalanan atau materi tambahan.</small>
        </div>
      </section>

      <section className="faq" aria-labelledby="faq-title">
        <div>
          <p className="kicker">PERTANYAAN AWAL</p>
          <h2 id="faq-title">Sebelum sesi pertama dimulai.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="konsultasi" className="consult">
        <div>
          <p className="kicker">MULAI DARI CERITA</p>
          <h2>Yuk, cari cara belajar yang paling pas.</h2>
          <p>
            Isi singkat saja. Pada versi portofolio ini, formulir hanya
            menampilkan konfirmasi lokal dan tidak menyimpan informasi Anda.
          </p>
        </div>
        <form noValidate onSubmit={submit}>
          <label>
            Nama pelajar
            <input
              required
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              placeholder="Contoh: Aira"
            />
          </label>
          <label>
            Jenjang
            <select
              value={form.level}
              onChange={(event) =>
                setForm({ ...form, level: event.target.value })
              }
            >
              <option>SD</option>
              <option>SMP</option>
              <option>SMA</option>
              <option>Kuliah</option>
            </select>
          </label>
          <label>
            Mode belajar
            <select
              value={form.mode}
              onChange={(event) =>
                setForm({ ...form, mode: event.target.value })
              }
            >
              <option>Online</option>
              <option>Tatap muka</option>
            </select>
          </label>
          <label>
            Paket
            <select value={form.package} onChange={(event) => setForm({ ...form, package: event.target.value })}>
              {packages.map((item) => <option key={item.name}>{item.name}</option>)}
            </select>
          </label>
          <button className="button coral" type="submit">
            Minta konsultasi <Icon name="arrow" />
          </button>
          {sent && (
            <p className="form-note" role="status">
              <Icon name="check" />
              {notice}
            </p>
          )}
        </form>
      </section>
      <footer>
        <a className="brand" href="#beranda">
          <span>l</span>lathy<em>private</em>
        </a>
        <p>Demo frontend · data tidak dikirim atau disimpan.</p>
        <button onClick={() => scrollTo("beranda")}>Kembali ke atas ↑</button>
      </footer>
    </main>
  );
}
