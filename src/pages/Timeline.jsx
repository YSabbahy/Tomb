import { useRef } from "react";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { useScrollFill } from "../hooks/useScrollFill";

const eras = [
  {
    era: "Predynastic Period",
    range: "c. 6000 &ndash; 3150 BC",
    text: "Farming communities along the Nile developed shared burial customs, early hieroglyphic notation, and the first regional kingdoms that would later unify into a single state.",
  },
  {
    era: "Old Kingdom",
    range: "c. 2686 &ndash; 2181 BC",
    text: "Known as the Age of the Pyramids. Djoser, Khufu, and Khafre commissioned the Step Pyramid at Saqqara and the Great Pyramid complex at Giza, including the Great Sphinx.",
  },
  {
    era: "Middle Kingdom",
    range: "c. 2055 &ndash; 1650 BC",
    text: "A period of reunification and cultural flourishing following the First Intermediate Period, marked by literature, irrigation projects in the Faiyum, and expanded trade into Nubia.",
  },
  {
    era: "New Kingdom",
    range: "c. 1550 &ndash; 1070 BC",
    text: "Egypt's imperial age. Pharaohs including Hatshepsut, Akhenaten, Tutankhamun, and Ramses II expanded the empire and built the great temple complexes of Karnak, Luxor, and Abu Simbel.",
  },
  {
    era: "Late Period",
    range: "c. 664 &ndash; 332 BC",
    text: "A time of foreign rule and cultural resilience under Nubian, Assyrian, and Persian dynasties, ending with the arrival of Alexander the Great.",
  },
  {
    era: "Ptolemaic Period",
    range: "332 &ndash; 30 BC",
    text: "Greek pharaohs ruled from Alexandria, blending Egyptian and Hellenistic traditions until the reign of Cleopatra VII and Egypt's annexation by Rome.",
  },
  {
    era: "Modern Rediscovery",
    range: "1798 &ndash; Present",
    text: "Napoleon's expedition sparked the field of Egyptology. Landmark finds since, from the Rosetta Stone to Tutankhamun's tomb, continue to reshape our understanding of ancient Egypt.",
  },
];

export default function Timeline() {
  const spineRef = useRef(null);
  const progress = useScrollFill(spineRef);

  return (
    <div>
      <PageHeader
        title="A Timeline of Ancient Egypt"
        subtitle="Seven thousand years of history, from the first farming villages on the Nile to the digital excavation archives of today."
        crumb="Timeline"
      />

      <div className="mx-auto w-[90%] max-w-[800px] py-14">
        <div ref={spineRef} className="relative pl-8">
          <span className="absolute left-0 top-0 h-full w-[2px] bg-gold/20" aria-hidden="true" />
          <span
            className="absolute left-0 top-0 w-[2px] bg-gold"
            style={{ height: `${progress}%` }}
            aria-hidden="true"
          />

          {eras.map((e, i) => (
            <div key={e.era} className={`relative ${i !== eras.length - 1 ? "pb-12" : ""}`}>
              <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-gold bg-ink" />
              <Reveal>
                <span className="text-sm font-bold uppercase tracking-widest text-gold">{e.range}</span>
                <h2 className="mt-1 text-2xl normal-case text-wheat">{e.era}</h2>
                <p className="mt-2 leading-relaxed text-[#c9c9c9]">{e.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
