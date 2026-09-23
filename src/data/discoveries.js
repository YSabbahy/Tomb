import n1 from "../assets/images/n1.webp";
import n2 from "../assets/images/n2.webp";
import n3 from "../assets/images/n3.webp";
import fot from "../assets/images/fot.webp";
import valentin from "../assets/images/valentin-ciccarone--5dIocTEbZ4-unsplash.webp";
import rm from "../assets/images/r-m-56zMN_t_v4A-unsplash.webp";

export const discoveries = [
  {
    slug: "grand-opening-countdown",
    img: n3,
    tag: "Giza",
    time: "Opening Soon",
    views: "2.1k",
    title: "Grand Opening Countdown",
    excerpt:
      "Final preparations for the opening of the world's largest archaeological museum are nearing completion.",
    body:
      "After years of construction on the Giza plateau, the museum's final galleries are being fitted with climate-controlled display cases for its most fragile holdings. Engineering teams have completed load testing on the grand staircase, which will display a procession of royal statues visible from the entrance plaza. Ticketing for the opening weeks will open to the public in phases, prioritizing school groups and returning members.",
  },
  {
    slug: "hidden-tomb-revealed",
    img: n1,
    tag: "Saqqara",
    time: "4,000 Years Old",
    views: "1.2k",
    title: "Hidden Tomb Revealed",
    excerpt: "A new tomb has been discovered in Saqqara containing previously unseen treasures.",
    body:
      "Ground-penetrating radar surveys led our field team to a sealed limestone shaft roughly six meters below the surface. Initial excavation uncovered painted burial chambers, sets of funerary furniture, and inscribed offering tables naming a mid-ranking official of the royal treasury. Full documentation of the chamber will take an estimated eighteen months before any objects are considered for public display.",
  },
  {
    slug: "experience-vr-history",
    img: n2,
    tag: "King Tut",
    time: "New Kingdom",
    views: "3.5k",
    title: "Experience VR History",
    excerpt: "Explore the treasures of Tutankhamun from the comfort of your home with the latest virtual reality technology.",
    body:
      "Our digital heritage lab has completed a full photogrammetry scan of over 300 objects from the royal collection, stitching together millions of reference photographs into millimeter-accurate 3D models. Members can now explore burial chambers at their own pace through a VR headset or a standard browser, with narration recorded by our resident Egyptologists.",
  },
  {
    slug: "restoration-of-the-golden-mask",
    img: valentin,
    tag: "Conservation",
    time: "6-Month Project",
    views: "980",
    title: "Restoration of the Golden Mask",
    excerpt: "Conservators complete a delicate cleaning and stabilization project on one of our signature pieces.",
    body:
      "Using non-invasive laser ablation, conservators removed centuries of accumulated resin and soot without disturbing the original gold leaf. X-ray fluorescence scanning confirmed the alloy composition and helped date the piece more precisely within the 18th Dynasty. The mask returns to its gallery case this month alongside a new interactive display explaining the restoration process.",
  },
  {
    slug: "sphinx-groundwater-survey",
    img: rm,
    tag: "Giza",
    time: "Ongoing Study",
    views: "1.6k",
    title: "New Groundwater Survey at the Sphinx",
    excerpt: "Geologists complete the first phase of a multi-year monitoring program around the Great Sphinx.",
    body:
      "Rising groundwater levels around the Giza plateau have raised concerns about long-term erosion of the limestone bedrock supporting the Sphinx. A network of monitoring wells installed this season will track seasonal fluctuations, feeding data into a preservation model developed with international conservation partners.",
  },
  {
    slug: "student-fieldwork-program",
    img: fot,
    tag: "Education",
    time: "Applications Open",
    views: "740",
    title: "Fieldwork Program Opens to University Students",
    excerpt: "A new seasonal program invites archaeology students to join supervised excavation work.",
    body:
      "Selected students will spend six weeks working alongside our excavation teams in Saqqara and Luxor, receiving training in stratigraphy, artifact handling, and digital recording. The program is offered in partnership with regional universities and includes on-site housing and a stipend for the duration of the placement.",
  },
];

export const getDiscoveryBySlug = (slug) => discoveries.find((d) => d.slug === slug);
