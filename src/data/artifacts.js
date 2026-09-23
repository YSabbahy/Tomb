import valentin from "../assets/images/valentin-ciccarone--5dIocTEbZ4-unsplash.webp";
import fatih from "../assets/images/fatih-beki-9vQp_c3UOL4-unsplash.webp";
import sam from "../assets/images/sam-szuchan--b3UyjfpSew-unsplash.webp";
import rm from "../assets/images/r-m-56zMN_t_v4A-unsplash.webp";
import dmitrii from "../assets/images/dmitrii-zhodzishskii-cOihXsrJFRc-unsplash.webp";
import mamdouh from "../assets/images/mamdouh-abdallah-GkePRhwFIHY-unsplash.webp";
import michael from "../assets/images/michael-starkie-cxijyrxOFCE-unsplash.webp";
import simon from "../assets/images/simon-boyXZfqpwpU-unsplash.webp";

export const artifacts = [
  {
    slug: "golden-mask",
    title: "The Golden Mask",
    img: valentin,
    period: "New Kingdom, 18th Dynasty",
    location: "Valley of the Kings, Luxor",
    category: "Funerary Art",
    excerpt:
      "A ceremonial burial mask hammered from sheet gold and inlaid with lapis lazuli and carnelian.",
    description:
      "Crafted for a member of the royal court, this mask was designed to preserve the likeness of its owner for eternity. The gold symbolized the incorruptible flesh of the gods, while the inlaid stripes of lapis lazuli represent the divine hair of Osiris. Traces of resin on the interior suggest it was fitted directly over linen wrappings during the mummification ritual.",
  },
  {
    slug: "ramses-the-great",
    title: "Ramses The Great",
    img: fatih,
    period: "New Kingdom, 19th Dynasty",
    location: "Abu Simbel, Aswan",
    category: "Royal Statuary",
    excerpt:
      "A monumental sandstone likeness of Egypt's most celebrated warrior-king.",
    description:
      "Carved from the living rock, this colossus once stood guard at the entrance of a temple built to commemorate a military triumph. Ramses II ruled for 66 years and commissioned more monuments than any pharaoh before him. Restoration teams have spent over a decade stabilizing the sandstone against erosion caused by rising groundwater in the region.",
  },
  {
    slug: "royal-portraits",
    title: "Royal Portraits",
    img: sam,
    period: "Middle Kingdom, 12th Dynasty",
    location: "Faiyum Necropolis",
    category: "Painted Panels",
    excerpt: "A collection of painted limestone reliefs depicting the royal family in formal procession.",
    description:
      "These reliefs once lined the causeway of a pyramid complex, guiding the pharaoh's soul toward the afterlife. Pigments were derived from ground malachite, ochre, and galena, mixed with egg tempera. Conservators use multispectral imaging to recover color that has faded beneath centuries of sand.",
  },
  {
    slug: "great-sphinx",
    title: "The Great Sphinx",
    img: rm,
    period: "Old Kingdom, 4th Dynasty",
    location: "Giza Plateau",
    category: "Monumental Architecture",
    excerpt: "The largest monolithic statue in the world, carved from a single limestone outcrop.",
    description:
      "Standing sentinel over the Giza plateau for more than 4,500 years, the Sphinx combines the body of a lion with a royal human head, believed by many Egyptologists to represent the pharaoh Khafre. Our conservation team continues geological surveys to monitor weathering along its limestone strata.",
  },
  {
    slug: "temple-guardians",
    title: "Temple Guardians",
    img: dmitrii,
    period: "New Kingdom, 18th Dynasty",
    location: "Karnak Temple Complex, Luxor",
    category: "Temple Statuary",
    excerpt: "Paired granite guardian statues that once flanked the processional avenue of Karnak.",
    description:
      "Carved from red Aswan granite, these guardians depict protective deities holding ankh symbols of life. They were positioned to greet visiting dignitaries and priests as they approached the inner sanctuary. Quarry marks on the base match granite extraction sites nearly 200 kilometers south.",
  },
  {
    slug: "king-ramses-ii",
    title: "King Ramses II",
    img: mamdouh,
    period: "New Kingdom, 19th Dynasty",
    location: "Memphis Necropolis",
    category: "Royal Statuary",
    excerpt: "A fallen colossus rediscovered lying face-down in the fields outside ancient Memphis.",
    description:
      "This limestone colossus was found in 1820 partially submerged in groundwater near the ruins of Memphis, Egypt's ancient capital. Despite losing its legs to time, the finely carved facial features remain remarkably intact, offering one of the clearest surviving portraits of the pharaoh in his prime.",
  },
  {
    slug: "canopic-vessels",
    title: "Canopic Vessels of Nefer-Ka",
    img: michael,
    period: "New Kingdom, 19th Dynasty",
    location: "Deir el-Medina, Luxor",
    category: "Funerary Art",
    excerpt: "A set of four alabaster jars carved with the heads of the Four Sons of Horus.",
    description:
      "Used to preserve the internal organs removed during mummification, each vessel corresponds to a protective deity: Imsety, Hapi, Duamutef, and Qebehsenuef. The hieroglyphic bands encircling each jar record protective spells drawn from the Book of the Dead.",
  },
  {
    slug: "solar-barque",
    title: "The Solar Barque Model",
    img: simon,
    period: "Old Kingdom, 4th Dynasty",
    location: "Giza Plateau",
    category: "Ceremonial Vessel",
    excerpt: "A cedarwood ceremonial boat believed to carry the pharaoh's soul across the sky with the sun god.",
    description:
      "Disassembled into more than 1,200 pieces and buried in a sealed pit beside the Great Pyramid, this vessel took a restoration team over a decade to reassemble. Cedar timbers imported from the Levant show tool marks consistent with rope-lashed construction rather than pegged joints.",
  },
];

export const getArtifactBySlug = (slug) => artifacts.find((a) => a.slug === slug);
