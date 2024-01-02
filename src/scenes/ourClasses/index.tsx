import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Mattis molestie a iaculis at erat pellentesque. Nibh sit amet commodo nulla. Nec feugiat in fermentum posuere urna nec tincidunt.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Mattis molestie a iaculis at erat pellentesque. Nibh sit amet commodo nulla. Nec feugiat in fermentum posuere urna nec tincidunt.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Mattis molestie a iaculis at erat pellentesque. Nibh sit amet commodo nulla. Nec feugiat in fermentum posuere urna nec tincidunt.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Mattis molestie a iaculis at erat pellentesque. Nibh sit amet commodo nulla. Nec feugiat in fermentum posuere urna nec tincidunt.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Mattis molestie a iaculis at erat pellentesque. Nibh sit amet commodo nulla. Nec feugiat in fermentum posuere urna nec tincidunt.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Mattis molestie a iaculis at erat pellentesque. Nibh sit amet commodo nulla. Nec feugiat in fermentum posuere urna nec tincidunt.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // it triggers when I see 50% of the div
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Ac placerat vestibulum lectus mauris. Turpis egestas pretium
              aenean pharetra magna ac placerat vestibulum lectus. Ultrices
              sagittis orci a scelerisque purus. Ut venenatis tellus in metus
              vulputate.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          {/* this is how you make overflow happen - child element is bigger than the parent */}
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name} - ${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
