export interface Offer {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  tags: string[];
}

export const offers: Offer[] = [
  {
    id: 'fuehrungskraefte-coaching',
    icon: 'Compass',
    title: 'Führungskräfte-Coaching',
    subtitle: 'Klar in die Führung',
    description:
      'Einzelcoaching für Führungskräfte, die ihre Wirkung, ihr Rollenverständnis und ihre Selbststeuerung weiterentwickeln wollen.',
    details:
      'In 6–12 Sitzungen arbeiten wir an Ihrer Führungsidentität, Ihrem Rollenverständnis und Ihrer Wirkung auf andere. Wir verbinden kognitive Klärung mit körperlicher Präsenz und stimmlichem Ausdruck. So entsteht Führung, die authentisch trägt – im Beruf und darüber hinaus. Format: online oder vor Ort in Köln.',
    tags: ['B2B', 'B2C'],
  },
  {
    id: 'teamentwicklung',
    icon: 'Users',
    title: 'Teamentwicklung & Teamcoaching',
    subtitle: 'Räume, in denen Neues entsteht',
    description:
      'Workshops und Prozessbegleitung für Teams, die zusammenwachsen, Konflikte klären oder neue Zusammenarbeit finden wollen.',
    details:
      'Vom 1-Tages-Workshop bis zur modularen Prozessbegleitung: Ich schaffe Räume, in denen sich Teammitglieder wirklich begegnen. Konflikte werden nicht weggeredet, sondern als Quelle für Neues genutzt. Methoden aus systemischer Beratung, Mediation und Stimmearbeit verbinden sich zu einem Erlebnis, das Teams nachhaltig verändert.',
    tags: ['B2B'],
  },
  {
    id: 'konfliktmediation',
    icon: 'Scale',
    title: 'Konfliktmediation',
    subtitle: 'Vom Stillstand zur Klärung',
    description:
      'Strukturierte Mediation bei eskalierten Konflikten zwischen Führungskräften, Teams oder Geschäftspartnern.',
    details:
      'Auf Basis meiner IHK-Zertifizierung als Wirtschaftsmediatorin begleite ich Konflikte aller Eskalationsstufen – von der Klärung zwischen zwei Personen bis zu Mehrparteien-Verfahren. Ziel ist nicht Kompromiss, sondern echte Klärung: Jeder wird gehört, Verantwortung wird geteilt, neue Wege entstehen.',
    tags: ['B2B'],
  },
  {
    id: 'stimme-praesenz',
    icon: 'AudioLines',
    title: 'Stimme & Präsenz',
    subtitle: 'Deine Stimme als Kompass',
    description:
      'Einzel- und Gruppenarbeit mit der eigenen Stimme – als Zugang zu innerer Stimmigkeit, Präsenz und Ausdruckskraft.',
    details:
      'Die Stimme ist mehr als ein Werkzeug – sie ist Kompass innerer Stimmigkeit. In Circle Singing und Vokalimprovisation entdecken Sie, wie Ihre Stimme klingt, wenn Sie wirklich präsent sind. Kein Gesangstraining, sondern eine Reise zu Klarheit, Ausdruck und Verbindung. Für Führungskräfte, die wirken wollen – und für Menschen, die sich selbst finden.',
    tags: ['B2B', 'B2C'],
  },
  {
    id: 'stresskompetenz',
    icon: 'HeartPulse',
    title: 'Stresskompetenz & Selbststeuerung',
    subtitle: 'Gesund bleiben unter Dauerbelastung',
    description:
      'Coaching und Training für Menschen, die nachhaltig mit Belastungen umgehen und ihre Ressourcen stärken wollen.',
    details:
      'Basierend auf dem Zürcher Ressourcenmodell arbeiten wir an Ihrer Stresskompetenz: Wie erkennen Sie Belastungen früh? Wie steuern Sie sich selbst in herausfordernden Phasen? Wie stärken Sie Ihre Ressourcen nachhaltig? Praktisch, körperbezogen und direkt anwendbar – für Führungskräfte und Privatpersonen.',
    tags: ['B2B', 'B2C'],
  },
  {
    id: 'ausbildung',
    icon: 'GraduationCap',
    title: 'Ausbildung & Train-the-Trainer',
    subtitle: 'Führung lehren, Führung lernen',
    description:
      'Ausbildung von Teamleitern und Wirtschaftsmediatoren. Über 500 Teamleiter und 200 Wirtschaftsmediatoren begleitet.',
    details:
      'Ich bilde aus – seit über 15 Jahren. Für das Managementzentrum Mittelrhein in Koblenz, für Bundes- und Landesbehörden, für Unternehmen. Teamleiter-Ausbildung, Wirtschaftsmediator-Ausbildung, Führungskräfte-Programme. Meine Ausbildungen sind praxisnah, methodenreich und menschlich. Die Teilnehmer:innen gehen nicht nur mit Wissen, sondern mit Erfahrung.',
    tags: ['B2B'],
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Melanie hat mich nicht nur fachlich weitergebracht, sondern mir geholfen, mich selbst als Führungskraft neu zu verstehen. Ihre Art, gleichzeitig wertschätzend und klar zu sein, ist außergewöhnlich.',
    name: 'Dr. S. K.',
    role: 'Bereichsleiter, Finanzverwaltung',
  },
  {
    quote:
      'Unser Team stand vor einer schweren Konfliktklärung. Melanie hat den Raum so gehalten, dass etwas Neues entstehen konnte. Das Ergebnis war nicht Kompromiss, sondern echte Klärung.',
    name: 'M. R.',
    role: 'Geschäftsführerin, mittelständisches IT-Unternehmen',
  },
  {
    quote:
      'Ich kam wegen Führungsthemen, ich ging mit einer völlig neuen Beziehung zu meiner eigenen Stimme. Das war mehr als Coaching – es war eine Entwicklung.',
    name: 'T. H.',
    role: 'Projektleiter, Pharmaindustrie',
  },
  {
    quote:
      'Melanies Workshops sind kein PowerPoint-Marathon. Sie schafft Räume, in denen Menschen sich wirklich begegnen. Selten so eine transformative Teamentwicklung erlebt.',
    name: 'A. L.',
    role: 'HR-Leiterin, Bundesbehörde',
  },
  {
    quote:
      'Sie hat die seltene Gabe, tiefgründig zu analysieren und gleichzeitig ganz im Moment mit dir zu sein. Als Coach ist sie präsent, klar und warm zugleich.',
    name: 'J. W.',
    role: 'Führungskraft, Bankenwesen',
  },
];

export interface Strength {
  icon: string;
  title: string;
  description: string;
}

export const strengths: Strength[] = [
  {
    icon: 'Brain',
    title: 'Wissenschaftlich fundiert',
    description:
      'Diplom-Psychologie mit Schwerpunkt Arbeits- und Organisationspsychologie. Systemische Beratung und Coaching auf höchstem Ausbildungsstandard.',
  },
  {
    icon: 'Sparkles',
    title: 'Ganzheitlich',
    description:
      'Kognition, Körper, Stimme und Meditation. Ich arbeite nicht nur mit dem Kopf, sondern mit dem ganzen Menschen – so entsteht tiefe, nachhaltige Veränderung.',
  },
  {
    icon: 'Telescope',
    title: 'Zukunftsoffen',
    description:
      'MIT-Zertifikat „Leading from the emerging future" nach Otto Scharmer. Theory U als Haltung: nicht von der Vergangenheit her denken, sondern von der Zukunft her gestalten.',
  },
  {
    icon: 'Scale',
    title: 'Konfliktstark',
    description:
      'IHK-zertifizierte Wirtschaftsmediatorin mit jahrzehntelanger Erfahrung in der Klärung eskalierter Konflikte – von der Zweierbeziehung bis zur Mehrparteien-Konstellation.',
  },
  {
    icon: 'Award',
    title: 'Erfahren',
    description:
      'Über 20 Jahre selbstständig. Hunderte ausgebildete Teamleiter und Wirtschaftsmediatoren. Dutzende Organisationen begleitet – von der Bundesbank bis zum Mittelstand.',
  },
  {
    icon: 'Globe',
    title: 'International & interkulturell',
    description:
      'Gründerin von Zebraway Consulting zur Geschäftsanbahnung zwischen Nigeria und Europa. Interkulturelle Verständigung ist nicht Theorie, sondern gelebte Praxis.',
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 20, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 500, suffix: '+', label: 'Teamleiter ausgebildet' },
  { value: 200, suffix: '+', label: 'Wirtschaftsmediatoren ausgebildet' },
  { value: 50, suffix: '+', label: 'Organisationen begleitet' },
];

export const clients: string[] = [
  'Deutsche Bundesbank',
  'Bayerische Landesbank',
  'Finanzverwaltung NRW',
  'Finanzverwaltung RLP',
  'Bundesakademie der Öffentlichen Verwaltung',
  'Bundesministerium für Arbeit und Soziales',
  'Boehringer-Ingelheim',
  'sanofi-aventis',
  'Schering',
  'Aventis Pharma',
  'Eisai Life Sciences',
  'Roland Berger',
  'Procter & Gamble',
  'Fujitsu-Siemens',
  'Monster Deutschland',
  'Siemens BKK',
  'ATOS Origin',
  'Deutsche Rentenversicherung BW',
];

export const qualifications: string[] = [
  'Diplom-Psychologin (Universität Saarbrücken, 2000)',
  'Systemische Beraterin & Coach (ISB Wiesloch, 2006–2009)',
  'Wirtschaftsmediatorin (IHK, bei Reiner Ponschab, 2009)',
  'MIT-Zertifikat „Leading from the emerging future" (2018)',
  'Hypnosystemisches Coaching (Gunther Schmidt, Heidelberg)',
  'Zürcher Ressourcenmodell (Stressprävention & Ressourcenstärkung)',
  'Provokativer Beratungsstil (Farrelly)',
  'Initiatisch-phänomenologische Beratungsarbeit (ZIPAT Bonn, seit 2015)',
  'Stimmearbeit: Circle Singing, Vokalimprovisation',
  'Langjährige Meditationspraxis',
];
