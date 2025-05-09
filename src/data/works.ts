interface WorkListItem {
  title: string;
  description: string;
  blurb: string;
  year: string;
  category: string;
  url: string;
  wip: boolean;
  external?: boolean; // optional
}

export const works: WorkListItem[] = [
  {
    title: "data vis",
    description: "equitable indoor environments",
    blurb: "info vis",
    year: "2025",
    category: "research design code",
    url: "/case-studies/datavis",
    wip: true,
  },
  {
    title: "olympal",
    description: "shared sporting experiences for AR",
    blurb: "interaction desn",
    year: "2024",
    category: "research design",
    url: "https://www.behance.net/gallery/223473325/Olympal-Shared-sporting-experience-in-AR",
    wip: false,
    external: true,
  },
  {
    title: "anu",
    description: "back-to-basics task management",
    blurb: "adv web des",
    year: "2024-",
    category: "code design",
    url: "https://speakingofsneha.github.io/anu/#/",
    wip: false,
  },
  {
    title: "lit-box",
    description: "addressing the literacy crisis",
    blurb: "ux design",
    year: "2023–",
    category: "research design",
    url: "/case-studies/litbox",
    wip: true,
  },
  {
    title: "kolam",
    description: "translating kolams into code in p5js",
    blurb: "creative coding",
    year: "2023",
    category: "code",
    url: "https://www.behance.net/gallery/223935267/Mornings-in-Chidam-Creative-Coding-in-p5js",
    wip: false,
    external: true,
  },
  {
    title: "sapasa",
    description: "democratising indian classical music",
    blurb: "interface desn",
    year: "2023",
    category: "research design",
    url: "https://www.figma.com/proto/yfEMxnncnoibR83KhucQjp/sapasa?node-id=424-647&node-type=canvas&t=ALDmbUS532bnPMbz-0&scaling=scale-down&content-scaling=fixed&page-id=414:616",
    wip: false,
    external: true,
  },
  {
    title: "misc.",
    description: "miscellaneous design / art pieces",
    blurb: "misc. design / art",
    year: "2018–",
    category: "design",
    url: "https://mail-attachment.googleusercontent.com/...",
    wip: false,
    external: true,
  },
];