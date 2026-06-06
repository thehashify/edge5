/**
 * Edge5 — Firestore seed script
 * Run: node seed.js
 * Requires GOOGLE_APPLICATION_CREDENTIALS env var pointing to a service account JSON,
 * OR run via `firebase functions:shell` / emulator with admin SDK auto-auth.
 */

const admin = require('firebase-admin');

// Allow overriding project ID for emulator testing
const PROJECT_ID = process.env.GCLOUD_PROJECT || 'edge5-prod';

if (!admin.apps.length) {
  admin.initializeApp({ projectId: PROJECT_ID });
}

const db = admin.firestore();

// ── Colleges ──────────────────────────────────────────────────────────────────

const colleges = [
  {
    slug: 'iim-bangalore',
    name: 'IIM Bangalore',
    city: 'Bangalore',
    state: 'Karnataka',
    established_year: 1973,
    type: 'Government',
    affiliated_university: 'Autonomous',
    naac_grade: 'A++',
    naac_score: 3.89,
    nirf_rank: 2,
    nirf_category: 'Management',
    ugc_approved: true,
    aicte_approved: false,
    courses: [
      { name: 'PGP (MBA)', duration: '2 years', fees_total: 2400000, seats: 512, entrance_exams: ['CAT', 'GMAT'] },
      { name: 'PGPEM', duration: '2 years', fees_total: 2600000, seats: 60, entrance_exams: ['GMAT', 'GRE'] },
    ],
    fees_min: 1100000,
    fees_max: 1300000,
    placement_highest: 11000000,
    placement_average: 3400000,
    placement_median: 3200000,
    placement_percent: 100,
    top_recruiters: ['McKinsey', 'BCG', 'Goldman Sachs', 'Amazon', 'Google'],
    campus_size: 100,
    hostel_available: true,
    girls_hostel: true,
    website: 'https://www.iimb.ac.in',
    admission_email: 'pgpadmissions@iimb.ac.in',
    admission_phone: '+91-80-26993000',
    review_count: 0,
    review_score: 0,
    verified: true,
    verified_date: '2025-01-01',
    linkedin_verified: true,
    stream: 'MBA',
    about: 'IIM Bangalore (IIMB) is one of India\'s premier management institutions, consistently ranked among the top 2 management schools in the country. Located in India\'s Silicon Valley, it offers world-class infrastructure, a diverse student body, and unparalleled industry connections — especially in tech, consulting, and finance.',
    approvals: ['UGC', 'AIU', 'AACSB'],
    created_at: admin.firestore.FieldValue.serverTimestamp(),
    updated_at: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    slug: 'xlri-jamshedpur',
    name: 'XLRI Jamshedpur',
    city: 'Jamshedpur',
    state: 'Jharkhand',
    established_year: 1949,
    type: 'Private',
    affiliated_university: 'Autonomous',
    naac_grade: 'A',
    naac_score: 3.51,
    nirf_rank: 5,
    nirf_category: 'Management',
    ugc_approved: true,
    aicte_approved: false,
    courses: [
      { name: 'BM (MBA equivalent)', duration: '2 years', fees_total: 1550000, seats: 180, entrance_exams: ['XAT', 'GMAT'] },
      { name: 'HRM', duration: '2 years', fees_total: 1550000, seats: 120, entrance_exams: ['XAT', 'GMAT'] },
    ],
    fees_min: 1450000,
    fees_max: 1600000,
    placement_highest: 9000000,
    placement_average: 2900000,
    placement_median: 2600000,
    placement_percent: 100,
    top_recruiters: ['Deloitte', 'EY', 'HSBC', 'Nestle', 'Asian Paints'],
    campus_size: 40,
    hostel_available: true,
    girls_hostel: true,
    website: 'https://www.xlri.ac.in',
    admission_email: 'admissions@xlri.ac.in',
    admission_phone: '+91-657-3983333',
    review_count: 0,
    review_score: 0,
    verified: true,
    verified_date: '2025-01-01',
    linkedin_verified: true,
    stream: 'MBA',
    about: 'XLRI Jamshedpur is India\'s oldest business school, founded in 1949 by the Jesuits. Renowned for its Human Resources Management programme and strong ethical values, XLRI is the top choice for students targeting HR, consulting, and FMCG roles. Its XAT entrance exam is one of the most respected in India.',
    approvals: ['UGC', 'AMDISA', 'AACSB'],
    created_at: admin.firestore.FieldValue.serverTimestamp(),
    updated_at: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    slug: 'tapmi-manipal',
    name: 'TAPMI Manipal',
    city: 'Manipal',
    state: 'Karnataka',
    established_year: 1980,
    type: 'Private',
    affiliated_university: 'Manipal Academy of Higher Education',
    naac_grade: 'A',
    naac_score: 3.37,
    nirf_rank: 51,
    nirf_category: 'Management',
    ugc_approved: true,
    aicte_approved: true,
    courses: [
      { name: 'PGDM', duration: '2 years', fees_total: 1900000, seats: 240, entrance_exams: ['CAT', 'XAT', 'GMAT', 'CMAT'] },
      { name: 'PGDM — BKFS', duration: '2 years', fees_total: 1900000, seats: 60, entrance_exams: ['CAT', 'XAT', 'GMAT'] },
    ],
    fees_min: 1800000,
    fees_max: 2000000,
    placement_highest: 3500000,
    placement_average: 1200000,
    placement_median: 1100000,
    placement_percent: 95,
    top_recruiters: ['HDFC Bank', 'Axis Bank', 'Wipro', 'Infosys', 'Flipkart'],
    campus_size: 60,
    hostel_available: true,
    girls_hostel: true,
    website: 'https://www.tapmi.edu.in',
    admission_email: 'admissions@tapmi.edu.in',
    admission_phone: '+91-820-2701000',
    review_count: 0,
    review_score: 0,
    verified: true,
    verified_date: '2025-01-01',
    linkedin_verified: false,
    stream: 'MBA',
    about: 'T.A. Pai Management Institute (TAPMI) in Manipal is a highly regarded private B-school known for its rigorous curriculum and strong banking and finance placements. Its BKFS specialisation is among the best in India for students targeting banking careers. The Manipal campus offers excellent infrastructure and a vibrant student life.',
    approvals: ['UGC', 'AICTE', 'AIU'],
    created_at: admin.firestore.FieldValue.serverTimestamp(),
    updated_at: admin.firestore.FieldValue.serverTimestamp(),
  },
];

// ── Exam Updates ──────────────────────────────────────────────────────────────

const examUpdates = [
  {
    exam_name: 'JEE Main',
    category: 'Engineering',
    status: 'Session 2 Registration Open',
    important_date: '2026-04-15',
    date_label: 'Session 2 Exam',
    details: 'Session 2 registrations are open on jeemain.nta.nic.in. Admit cards will be released 3 days before the exam.',
    created_at: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    exam_name: 'CAT 2026',
    category: 'MBA',
    status: 'Notification Expected',
    important_date: '2026-07-31',
    date_label: 'Notification Release',
    details: 'CAT 2026 notification is expected in late July. Registration typically opens in August and the exam is held in November.',
    created_at: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    exam_name: 'NEET UG',
    category: 'Medical',
    status: 'Results Declared',
    important_date: '2026-06-14',
    date_label: 'Counselling Starts',
    details: 'NEET UG 2026 results have been declared. MCC counselling (AIQ seats) begins in June. State counselling timelines vary.',
    created_at: admin.firestore.FieldValue.serverTimestamp(),
  },
  {
    exam_name: 'CLAT',
    category: 'Law',
    status: 'Registration Open',
    important_date: '2026-12-01',
    date_label: 'CLAT 2027 Exam',
    details: 'CLAT 2027 registrations are open at consortiumofnlus.ac.in. The exam will be held in December 2026 for admissions in 2027.',
    created_at: admin.firestore.FieldValue.serverTimestamp(),
  },
];

// ── Seed function ─────────────────────────────────────────────────────────────

async function seed() {
  console.log('🌱 Seeding Edge5 Firestore...\n');

  // Colleges — use slug as document ID
  for (const college of colleges) {
    const { slug, ...data } = college;
    await db.collection('colleges').doc(slug).set(data);
    console.log(`  ✓ College: ${college.name}`);
  }

  // Exam updates — auto-ID
  for (const exam of examUpdates) {
    await db.collection('exam_updates').add(exam);
    console.log(`  ✓ Exam: ${exam.exam_name}`);
  }

  console.log('\n✅ Seed complete.');
  process.exit(0);
}

seed().catch(err => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
