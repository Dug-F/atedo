import ScrollIntoView from "../scrollIntoView/ScrollIntoView";

const MissionStatement = () => {
  return (
    <section className="flex flex-col align-center w-[80%]">
      <ScrollIntoView>
        <h2 className="text-8xl clipped-text">ATEDO.</h2>
      </ScrollIntoView>
      <p className="w-[80%] text-xl lg:text-2xl mx-auto">Welcome to ATEDO—where creativity meets impact, and fleeting content meets its match. In a digital age saturated with ephemeral visuals and narratives, our mission is to break the cycle of forgettable content. We are the architects of memorable, impactful digital content that not only captures the essence of a brand but leaves a lasting impression on the audience.</p>
      <p className="w-[80%] text-xl lg:text-2xl mx-auto mt-6">We invite you to join us in not just making content, but in forging lasting legacies. Welcome to a collaboration where creativity, passion, and excellence pave the way for unparalleled outcomes. Welcome to ATEDO.</p>
    </section>
  );
};

export default MissionStatement;
